package com.example.video.controller;

import com.example.video.service.CommandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.CacheControl;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.io.File;
import java.io.IOException;
import java.util.UUID;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.ReentrantLock;

@RestController
public class UploadController implements WebMvcConfigurer {

    @Value("${shell-file-path}")
    private String shellFilePath;

    private static final String filePath;
    private static final String fileUrlPre = "/file/";

    public static ReentrantLock lock = new ReentrantLock();

    @Autowired
    private CommandService commandService;

    static {
        if (System.getProperty("user.dir").equals("/")) {
            filePath = "/upload/";
        } else {
            filePath = System.getProperty("user.dir") + "/upload/";
        }
    }

    /**
     * resource配置
     *
     * @param registry registry
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler(fileUrlPre + "**")
                .addResourceLocations("file:" + filePath)
                .setCacheControl(CacheControl.maxAge(2, TimeUnit.DAYS).cachePublic());
    }

    @PostMapping(value = "/upload")
    public String fileUpload(@RequestParam(value = "file") MultipartFile file) {
        if (file.isEmpty()) {
            System.out.println("文件为空");
        }
        String fileName = file.getOriginalFilename();  // 文件名
        String suffixName = fileName.substring(fileName.lastIndexOf("."));  // 后缀名
        fileName = UUID.randomUUID() + suffixName; // 新文件名
        File dest = new File(filePath + fileName);
        if (!dest.getParentFile().exists()) {
            dest.getParentFile().mkdirs();
        }
        try {
            file.transferTo(dest);
        } catch (IOException e) {
            e.printStackTrace();
        }
        String result = "";
        try {
            lock.lock();
            result = commandService.executeCmd("python " + shellFilePath + " --input " + filePath + fileName);
        } catch (Exception e) {
            result = "服务器异常";
        } finally {
            lock.unlock();
        }
        // 删除文件
        dest.deleteOnExit();
        return result;
    }

}

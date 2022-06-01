<template>
  <div class="container">
    <div class="title">
      视频上传
    </div>
    <el-card class="card">
      <div>
        <h4>视频预览</h4>
        <video :src="videoUrl" width="360" height="240" controls />
        <el-upload
          class="upload"
          action="upload"
          :before-upload="beforeUpload"
          :on-success="handleUploadSuccess"
          :on-remove="handleUploadRemove"
          :limit="1"
        >
          <el-button size="small" type="primary">
            点击上传
          </el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传视频文件
          </div>
        </el-upload>
      </div>
      <div class="text">
        <h4>结果码</h4>
        <el-input v-model="text" type="textarea" :rows="11" />
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      videoUrl: '',
      text: ''
    }
  },
  methods: {
    beforeUpload (file) {
      return true
    },
    handleUploadSuccess (res, file) {
      this.videoUrl = URL.createObjectURL(file.raw)
      this.text = res
    },
    handleUploadRemove () {
      this.videoUrl = ''
      this.text = ''
    }
  }
}
</script>
<style>
body {
  margin: 0;
  background-color: antiquewhite;
}

.container {
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
  max-width: 86rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.title {
  font-size: 20px;
  margin-bottom: 10px;
}
.card{
  width: 100%;
}
.card>.el-card__body{
  display: flex;
}

.img{
  width: 360px;
  height: 240px;
}
.img .image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #f5f7fa;
  color: #909399;
  font-size: 24px;
}
.upload{
  margin-top: 10px;
  width: 360px;
}
.text{
  width: 100%;
  margin-left: 30px;
}
</style>

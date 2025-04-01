<!--
 * @Author: panr99 1547177202@qq.com
 * @Date: 2025-04-01 14:07:56
 * @LastEditors: panr99 1547177202@qq.com
 * @LastEditTime: 2025-04-01 14:37:57
 * @FilePath: \nav.panrui.top\pages\generation.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <el-container class="container">
        <el-aside width="500px">
            <el-form :model="form" label-width="120px">
                <el-form-item label="API_KEY">
                    <el-input v-model="form.API_KEY" />
                </el-form-item>
                <el-form-item label="图片网络地址">
                    <el-input v-model="form.base_image_url" />
                </el-form-item>
                <el-form-item label="引导文本">
                    <el-input v-model="form.ref_prompt" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit"
                        >创建任务</el-button
                    >
                </el-form-item>
            </el-form>
            <el-divider />
            <el-form :model="form2" label-width="120px">
                <el-form-item label="任务ID">
                    <el-input v-model="form2.task_id" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit2"
                        >查询图片</el-button
                    >
                </el-form-item>
            </el-form>
            <el-divider />
            <el-upload
                v-model:file-list="fileList"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
            >
            </el-upload>

            <el-dialog v-model="dialogVisible">
                <img w-full :src="dialogImageUrl" alt="Preview Image" />
            </el-dialog>
        </el-aside>
        <el-main></el-main>
    </el-container>
</template>

<script setup lang="ts">
import type { UploadProps, UploadUserFile } from "element-plus";
// do not use same name with ref
const form = reactive({
    API_KEY: "",
    base_image_url: "",
    ref_prompt: "",
    // region: "",
    // date1: "",
    // date2: "",
    // delivery: false,
    // type: [],
    // resource: "",
    // desc: "",
});

const form2 = reactive({
    task_id: "",
});

const fileList = ref<UploadUserFile[]>([
    // {
    //     name: "food.jpeg",
    //     url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
    // },
]);

const dialogImageUrl = ref("");
const dialogVisible = ref(false);

const handleRemove: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles);
};

const handlePictureCardPreview: UploadProps["onPreview"] = (uploadFile) => {
    dialogImageUrl.value = uploadFile.url!;
    dialogVisible.value = true;
};

const onSubmit = () => {
    console.log("submit!", form);
};

const onSubmit2 = () => {
    console.log("submit!", form2);
    var myHeaders = new Headers();
    myHeaders.append(
        "Authorization",
        "Bearer sk-181864db3a884d8fa58f4bba88f19ab6"
    );
    myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
    myHeaders.append("Accept", "*/*");
    myHeaders.append("Host", "dashscope.aliyuncs.com");
    myHeaders.append("Connection", "keep-alive");
    myHeaders.append(
        "Cookie",
        "acw_tc=fe9c1f09-c31d-9eb3-b3f4-13d63a41c0b1e98fa598b132efc0691c96a7ee4103e2"
    );

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    fetch(
        "/api/v1/tasks/b258d983-866e-4a71-9e01-9830a88adda6",
        requestOptions
    )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
};
</script>

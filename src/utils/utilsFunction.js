
/**
 * 
 * @param {*} progredss_slide 小圆圈
 * @param {*} progresscover 加载的进度条
 * @param {*} progress 总的
 * @param {*} callback 回调函数
 */
// 实现进度条的拖拽
function progressLine(progredss_slide, progresscover, progress, callback) {
    //获取DOM节点
    //添加鼠标按下事件
    progredss_slide.onmousedown = (e) => {
        // console.log(e);
        //获取坐标
        let x = e.offsetX;
        let y = e.offsetY;
        document.onmousemove = (e) => {
            //获取left值
            let left = e.clientX - progress.offsetLeft - x;
            //设置边界值
            let minLeft = 0,
                maxLeft = progress.clientWidth;
            // console.log(e);
            if (left <= minLeft) {
                left = minLeft;
            } else if (left >= maxLeft) {
                left = maxLeft;
            }
            progredss_slide.style.left = left + "px";
            progresscover.style.width = left + "px";
            //更新时间
            //滑动的比例    
            let scale = left / maxLeft;
            callback && callback(scale);
            // audio.currentTime = audio.duration * scale;
        };
        document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
}

/**
 * 
 * @param {*} progredss_slide 
 * @param {*} progresscover 
 * @param {*} progress 
 * @param {*} callback 
 */
//点击实现滑动条的移动
function playclickProgress(progredss_slide, progresscover, progress, callback) {
    progress.onclick = (e) => {
        let x = e.clientX - progress.offsetLeft;
        progredss_slide.style.left = x + "px";
        progresscover.style.width = x + "px";
        let scale = x / progress.clientWidth;
        callback && callback(scale);
    };
}
export default {
    progressLine,
    playclickProgress
}
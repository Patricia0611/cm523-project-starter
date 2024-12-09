// 为 OK 按钮添加点击事件
document.getElementById('ok-button').addEventListener('click', () => {
    // 查找当前选中的 radio 按钮
    const selected = document.querySelector('input[name="anxiety"]:checked');

    // 如果有选中的选项，则跳转到对应页面
    if (selected) {
        const value = selected.value; // 获取选中项的值
        if (value === 'thorn') {
            window.location.href = 'thorn.html';
        } else if (value === 'cage') {
            window.location.href = 'cage.html';
        } else if (value === 'flow') {
            window.location.href = 'flow.html';
        } else if (value === 'chaos') {
            window.location.href = 'chaos.html';
        } else if (value === 'burning') {
            window.location.href = 'burning.html';
        }
    } else {
        // 如果未选中任何选项，弹出提示框
        alert('Please select an option before clicking OK.');
    }
});

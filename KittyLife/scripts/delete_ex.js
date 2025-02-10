function delete_ex(num) {
    daytasks.splice(num, 1);
    show_work_list();
    bar_scale();
    kitty_emotions();
}
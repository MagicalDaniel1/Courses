function bar_scale() {
    document.getElementById("energy_bar_size").style.width = 184 - daytasks.length * 18.4 + "px";
    document.getElementById("skill_bar_size").style.width = 0 + daytasks.length * 18.4 + "px";
}
bar_scale();
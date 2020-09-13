Blockly.Blocks['webview'] = {
    init: function() {
      this.appendValueInput('VALUE')
          .setCheck('String')
          .appendField('访问');
      this.setOutput(false);
      this.setColour(200);
      this.setTooltip('在你的程序中访问网页');
      
    }
  };
Blockly.JavaScript['webview'] = function(block) {
    // String or array length.
    var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
        Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
    console.log(argument0)
    var ex="var v=document.createElement('iframe');v.scrolling=true;v.height='100%';v.weight='100%';v.src="+argument0+"var p=document.getElementById('render_content');p.appendChild(v);p=null;v=null;"
    return [ex, Blockly.JavaScript.ORDER_MEMBER];
};

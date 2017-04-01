import _ from "lodash"
import $ from "jquery"
import foo from './foo'
function component () {
  // var element = document.createElement('div');
  var element = $('<div></div>');_

  /* lodash is required for the next line to work */
  // element.innerHTML = _.join(['Hello','webpack'], ' ');
  element.html(_.join(['Hello','webpack'],' '))
  // return element;
  return element.get(0)
}

document.body.appendChild(component());
// console.log(1)
console.log(foo)
console.log(foo())
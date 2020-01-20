// ==UserScript==
// @name        Checkbox
// @include     https://esale.ikco.ir/*
// @require     https://raw.githubusercontent.com/new24/junk/master/setMutationHandler.js
// ==/UserScript==


// delay
//setTimeout(
//  
//          document.getElementById("hdnCaptchaLFP").addEventListener("click", function() {
//            setMutationHandler(document, "input[type='hidden']", function(observer, node) {
//                node.click();
//                observer.disconnect();
//            });
//        });
//        function setMutationHandler(baseNode, selector, cb) {
//          var ob = new MutationObserver(function(mutations){
//            for (var i=0, ml=mutations.length, m; (i<ml) && (m=mutations[i]); i++)
//              for (var j=0, nodes=m.addedNodes, nl=nodes.length, n; (j<nl) && (n=nodes[j]); j++)
//                if (n.nodeType == 1) 
//                  if (n = n.matches(selector) ? n : n.querySelector(selector))
//                    if (!cb(ob, n))
//                      return;
//          });
//          ob.observe(baseNode, {subtree:true, childList:true}); 
//        }
//  
//  
//  , 1000000)


// but anyway set a MutationObserver handler for them
setMutationHandler(document, 'input[type="checkbox"]', checkThem);

function checkThem(nodes) {
    nodes.forEach(function(n) { n.checked = true });
}



// color  black=1  white=32   noghre'e=2  gray=5
setMutationHandler(document,'input[data-ikcocolorid="32"]', checkThem);

function checkThem(nodes) {
    nodes.forEach(function(n) { n.checked = true });
}


// reseting the  captcha
//document.getElementsByClassName('btn btn-warning')[1].click();

// form clicker
//document.getElementsByClassName('form-control captcha ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-maxlength')[1].submit();

;(window.onload = function () {

  //Methods
  var toogleViewElement = function (element, action){
      if ( action === 'hide' ){
        element.style.display = 'none';
      } else if ( action === 'show'){
        element.style.display = 'block';
      }
  };

  var createDocument = function (){

    var createNode = function (name, class_name, element_type, inner_html, clearfix) {
      var name = document.createElement(element_type);
      name.className = class_name;
      if ( inner_html ){
        name.innerHTML = inner_html;
      }
      if ( clearfix === true ){
        var clearfix = document.createElement('i');
        clearfix.className = 'clearfix';
      }
      return name;
    };

    var parentDivs = {
      name: 'document_item',
      className: 'document-item',
      type: 'div',
      children: [{
        name: 'logo',
        className: 'logo',
        elementType: 'div',
        innerHtml: '<img src="./img/logo.png" class="img"/> Best Company'
      },
      {
        name: 'address_container',
        className: 'row clearfix address-container',
        elementType: 'div'
      },
      {
        name: 'head',
        className: 'head text-center',
        elementType: 'h1'
      },
      {
        name: 'intro',
        className: 'row clearfix intro',
        elementType: 'div',
        innerHtml: '<div class="col-md-1 dear">Dear</div><div class="form-group col-md-2"><select class="form-control input-sm"><option value="mr">Mr.</option><option value="mrs">Mrs.</option><option value="ms">Ms.</option><option value="dr">Dr.</option><option value="proff">Proff.</option></select></div><div class="form-group col-md-5"><input type="text" class="form-control input-sm" id="fullname_recieve" placeholder="Full Name"></div>'
      },
      {
        name: 'text',
        className: 'text',
        elementType: 'div',
        innerHtml: 'Lorem ipsum Qui quis a quod tempore, <span class="writable"> laborum velit ipsam tenetur illo voluptates quae sapiente id ut nulla laudantium repellendus aperiam eius asperiores dignissimos omnis odio quaerat adipisci! Repudiandae quod sint officiis temporibus commodi accusamus! <span class="writable"><input type="text" class="form-control input-sm" id="number_1" placeholder="Numbers"/></span> Repellendus temporibus quo expedita doloribus pariatur, magnam dicta perferendis illo hic quia, dignissimos suscipit ducimus vero numquam, quasi nesciunt voluptas veritatis ex similique mollitia vel consequuntur. Dolorum tempore provident, odit aliquid iusto hic perspiciatis!<span class="writable"><input type="text" class="form-control input-sm" id="date_1" placeholder="dd/mm/yyyy"> Quasi cum officiis sapiente, quo ab expedita quia deleniti, dicta numquam ex blanditiis ad incidunt accusamus placeat nisi pariatur molestiae tenetur alias, perspiciatis doloremque quidem.</span>'
      },
      {
        name: 'signature',
        className: 'signature',
        elementType: 'div',
        innerHtml: '<div><button type="button" class="btn btn-default">Sign Document</button></div>Secretary<br/>Joahna Doe'
      }
      ]
    };

    var addressChildren = [
      {
        name: 'fullname',
        className: 'form-group col-md-5',
        elementType: 'div',
        innerHtml:'<input type="text" class="form-control input-sm" id="fullname_send" placeholder="Full Name">',
        clearfixStatus: true
      },
      {
        name: 'fullname',
        className: 'form-group col-md-5',
        elementType: 'div',
        innerHtml:'<input type="text" class="form-control input-sm" id="position_send" placeholder="Position">',
        clearfixStatus: true
      },
      {
        name: 'fullname',
        className: 'form-group col-md-5',
        elementType: 'div',
        innerHtml:'<input type="text" class="form-control input-sm" id="place_send" placeholder="Place">',
        clearfixStatus: true
      },
      {
        name: 'fullname',
        className: 'form-group col-md-5',
        elementType: 'div',
        innerHtml:'<input type="text" class="form-control input-sm" id="address_send" placeholder="Address">',
        clearfixStatus: true
      },
      {
        name: 'fullname',
        className: 'form-group col-md-2',
        elementType: 'div',
        innerHtml:'<input type="text" class="form-control input-sm" id="state_send" placeholder="State">',
        clearfixStatus: false
      },
      {
        name: 'fullname',
        className: 'form-group col-md-3',
        elementType: 'div',
        innerHtml:'<input type="text" class="form-control input-sm" id="street_send" placeholder="City">',
        clearfixStatus: false
      }
    ];

    // Create parent node
    var node_1 = createNode(parentDivs.name, parentDivs.className, parentDivs.type);

    // Create children
    var children;
    parentDivs.children.map(function(el){
      children = createNode(el.name, el.className, el.elementType, el.innerHtml)
      node_1.appendChild(children);
    })

    console.log(node_1);

  };


  // Buttons Menu
  var newDocumentButton = document.querySelector('.button-menu.add');
  var saveDocumentButton = document.querySelector('.button-menu.save');
  var deleteDocumentButton = document.querySelector('.button-menu.delete');


  // Type of Document
  var typeOfDocumentContainer = document.querySelector('.document-picker');
  var typeOfDocumentSelect = document.getElementById('document_type');


  //Document
  var documentContainer = document.getElementById('document_container');
  console.log(documentContainer)

  createDocument();

  newDocumentButton.addEventListener('click', function () {
    toogleViewElement(typeOfDocumentContainer, 'show');
  })

  typeOfDocumentSelect.addEventListener('change', function functionName() {
    var value = typeOfDocumentSelect.value;

    switch (value) {
      case 'official_document': console.log('official_document'); break;
      case 'resolution': console.log('resolution'); break;
      case 'order': console.log('order'); break;
      default: console.log('do nothing')
    };

  })

});

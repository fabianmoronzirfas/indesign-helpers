//opens the folder of the document
// Copyright (c)  2013
// Fabian "fabiantheblind" Morón Zirfas
// Permission is hereby granted, free of charge, to any
// person obtaining a copy of this software and associated
// documentation files (the "Software"), to deal in the Software
// without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense,
// and/or sell copies of the Software, and to  permit persons to
// whom the Software is furnished to do so, subject to
// the following conditions:
// The above copyright notice and this permission notice
// shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF  CONTRACT,
// TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTIO
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// see also http://www.opensource.org/licenses/mit-license.php

(function(thisObj){
var doc; // this will be the document
try{
  doc = app.activeDocument; // get  the acitve document
  }catch(e){
    // oh oh no active doc
    alert("You have no document open!\n" +e);
    return;
  }
try{
var folder = Folder(doc.filePath); // get the folder
folder.execute();//open it
  }catch(e){
  // never been saved
    alert("This doc was never saved!");
  }
  })(this);
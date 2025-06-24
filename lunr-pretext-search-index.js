var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title   Parsons Problem, Mathematical Proof  even numbers   Create a proof of the theorem: If is an even number, then .     Suppose is even.     Then is a prime number.    Then there exists an so that .    Then there exists an so that .     Click the heels of your ruby slippers together three times.    So .  This is a superfluous second paragraph in this block.    Thus .    And a little bit of irrelevant multi-line math .     Dorothy will not be much help with this proof.    "
},
{
  "id": "number-theory-proof",
  "level": "2",
  "url": "sec-section-name.html#number-theory-proof",
  "type": "Checkpoint",
  "number": "1.1.1",
  "title": "Parsons Problem, Mathematical Proof.",
  "body": " Parsons Problem, Mathematical Proof  even numbers   Create a proof of the theorem: If is an even number, then .     Suppose is even.     Then is a prime number.    Then there exists an so that .    Then there exists an so that .     Click the heels of your ruby slippers together three times.    So .  This is a superfluous second paragraph in this block.    Thus .    And a little bit of irrelevant multi-line math .     Dorothy will not be much help with this proof.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

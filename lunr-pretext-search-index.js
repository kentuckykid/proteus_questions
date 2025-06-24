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
  "title": "PreTeXt Section 1.2 Exercises",
  "body": " PreTeXt Section 1.2 Exercises   Do elementary row operations to achieve RREF   The following matrices each require one or a sequence of two EROs to convert them to RREF. For each matrix choose the ERO or sequence that will convert it to RREF. Some of the EROs or sequences of EROs in the list will not be used.                              then         then         then              then  then  then  then      Determine number of solutions from RREF.   Each of the following is the RREF of a linear system in augmented matrix form. The symbol represents an unknown real number. For each associated linear system, choose the correct response.           The linear system has one and only one solution.       The linear system has no solution.             The linear system has infinitely many solutions.       More information is needed to determine the number of solutions.     "
},
{
  "id": "ula_proteus_Section_1_2_RREF_using_EROs_v1",
  "level": "2",
  "url": "sec-section-name.html#ula_proteus_Section_1_2_RREF_using_EROs_v1",
  "type": "Checkpoint",
  "number": "1.1.1",
  "title": "Do elementary row operations to achieve RREF.",
  "body": " Do elementary row operations to achieve RREF   The following matrices each require one or a sequence of two EROs to convert them to RREF. For each matrix choose the ERO or sequence that will convert it to RREF. Some of the EROs or sequences of EROs in the list will not be used.                              then         then         then              then  then  then  then    "
},
{
  "id": "ula_proteus_Section_1_2_Solutions_from_RREF_v1",
  "level": "2",
  "url": "sec-section-name.html#ula_proteus_Section_1_2_Solutions_from_RREF_v1",
  "type": "Checkpoint",
  "number": "1.1.2",
  "title": "Determine number of solutions from RREF..",
  "body": " Determine number of solutions from RREF.   Each of the following is the RREF of a linear system in augmented matrix form. The symbol represents an unknown real number. For each associated linear system, choose the correct response.           The linear system has one and only one solution.       The linear system has no solution.             The linear system has infinitely many solutions.       More information is needed to determine the number of solutions.    "
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

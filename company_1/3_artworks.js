const information = (artworks)=>{
  let newArtworks = []
  for(let artwork of artworks){
    let info = {};
    info['title'] = artwork.title;
    let splitArray = artwork.dimensions.split("x")
    let height = splitArray[0].replace(/[^0-9]/g,'')
    let heightInInt = parseInt(height,10);
    let width = splitArray[1].replace(/[^0-9]/g,'')
    let widthInInt = parseInt(width,10);
    info['height'] = heightInInt;
    info['width'] = widthInInt;
    newArtworks.push(info);
  }
  // console.log(newArtworks);
  return newArtworks;
}
const artworks = [{title:'painting', dimensions: "23inches x 11 inches"}, 
{title:'painting2', dimensions: "(14in x 22in)"},
{title:'painting3', dimensions: "11 inch x 22 inch"},
{title:'painting4', dimensions: "dimensions: 21x31 in."},
{title:'painting5', dimensions: "11x43inches."},
{title:'painting6', dimensions: "17 x 12 inch."}]

console.log(information(artworks))
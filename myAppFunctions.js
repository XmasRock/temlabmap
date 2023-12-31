
const slugify = (text) => {
  return text
    .toString()                   // Cast to string (optional)
    .normalize('NFKD')            // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .toLowerCase()                // Convert the string to lowercase letters
    .trim()                       // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, '-')         // Replace spaces with -
    .replace(/[^\w\-]+/g, '')     // Remove all non-word chars
    .replace(/\_/g,'-')           // Replace _ with -
    .replace(/\-\-+/g, '-')       // Replace multiple - with single -
    .replace(/\-$/g, '');         // Remove trailing -
}

function sendMessage(in_id, in_slug_id) {
  const message = ""+in_id+"/"+slugs[in_slug_id];
  const targetOrigin = 'https://temlab.fr';
  parent.postMessage(message, targetOrigin);
  }

function afficherInstallations(in_installations){
  slug_id = 0;
  in_installations.forEach(element => {
    slugs.push(slugify(element.titre));
    marker = L.marker(element.coord).bindPopup('<table width="300px" height="150px"><tr><td align="center" valign="middle"  style="font-size: 14px"><img src="'+element.image+'" height="120px" width="120px"/><br/><b>'+element.societe+'</b></td><td  align="center" valign="middle" style="font-size: 14px"><b><a href="" onclick="sendMessage('+element.ID+','+slug_id+');">'+element.titre+'</a></b><br/><br/>'+element.adresse+'<br/><br/><p>'+element.resume+'</p></td></tr></table>').addTo(map);
    slug_id++;
  });
}

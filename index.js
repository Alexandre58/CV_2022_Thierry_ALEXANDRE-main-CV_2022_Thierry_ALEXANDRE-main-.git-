/***
 * event show image
 */
const btnEvent = document.querySelector(".btn_event");
const imgAuteur = document.querySelector("#imgAuteur");
const containerAProposDeMoi = document.querySelector(".aProposDemoi_p");
const btn_event_fermer = document.querySelector(".btn_event_fermer");
//show photo experiences professionneles
//dev
const developpeurWeb = document.querySelector(".developpeurWeb");
const developpeurWebAffichageImage = document.querySelector(
  ".developpeurWebAffichageImage"
);
//tour grosse pieces
const tourneur_image_ouvrir = document.querySelector(".tourneur_image_ouvrir");
const tournageGrossePiecesffichageImage = document.querySelector(
  ".tournageGrossePiecesffichageImage"
);
//formation tournage
const tournageFormationAffichageImage = document.querySelector(
  ".tournageFormationAffichageImage"
);
const formationPoterie = document.querySelector(".formationPoterie");
const tournageFormationAffichageImage2 = document.querySelector(
  ".tournageFormationAffichageImage2"
);

const formationPoterie2 = document.querySelector(".formationPoterie2");
//soudure armature du batiment
const soudure = document.querySelector(".soudure");
const soudure_afficher_image = document.querySelector(
  ".soudure_afficher_image"
);
//color theme variable
const dark_light_theme = document.querySelector("#dark_light_theme");
const container_main = document.querySelector(".container_main");
const container_header = document.querySelector(".container_header");
const javascrip_Container = document.querySelector(".javascrip_Container");
const event_container = document.querySelector(".event_container");
const container_sections = document.querySelector(".container_sections");
const container_footer = document.querySelector(".container_footer");
const btn_event = document.querySelector(".btn_event");
const auteur_event = document.querySelector(".auteur_event");
const container_competences_experiences = document.querySelector(
  ".container_competences_experiences"
);
/**
 * color theme function
 */

dark_light_theme.addEventListener("change", () => {
  document.body.classList.toggle("container_main_theme");
  container_header.classList.toggle("container_header_theme");
  javascrip_Container.classList.toggle("javascrip_Container_theme");
  event_container.classList.toggle("event_container_theme");
  container_sections.classList.toggle("container_sections_theme");
  container_footer.classList.toggle("container_footer_theme");
  btn_event.classList.toggle("btn_event_theme");
  btn_event_fermer.classList.toggle("btn_event_fermer_theme");
  auteur_event.classList.toggle("auteur_event_theme");
  container_competences_experiences.classList.toggle(
    "container_competences_experiences_theme"
  );
});

//look/add/close a propos de moi function
btnEvent.addEventListener("click", () => {
  containerAProposDeMoi.classList.add("showAProposDemoi_p");
  imgAuteur.classList.add("show_img");
  //button open
  btnEvent.style.display = "none";
  btn_event_fermer.style.display = "block";
});
btn_event_fermer.addEventListener("click", () => {
  containerAProposDeMoi.classList.remove("aProposDemoi_p");
  containerAProposDeMoi.classList.replace(
    "showAProposDemoi_p",
    "aProposDemoi_p_close"
  );
  //image
  imgAuteur.classList.remove("img_auteur");
  imgAuteur.classList.replace("show_img", "img_auteur_close");
  //button close
  btn_event_fermer.style.display = "none";
  btnEvent.style.display = "block";
});
//show photo experiences professionneles
developpeurWeb.addEventListener("click", () => {
  developpeurWebAffichageImage.classList.toggle(
    "developpeurWebAffichageImage_flex"
  );
});
tourneur_image_ouvrir.addEventListener("click", () => {
  tournageGrossePiecesffichageImage.classList.toggle(
    "developpeurWebAffichageImage_flex"
  );
});
formationPoterie.addEventListener("click", () => {
  tournageFormationAffichageImage.classList.toggle(
    "developpeurWebAffichageImage_flex"
  );
});
formationPoterie2.addEventListener("click", (e) => {
  e.preventDefault();
  tournageFormationAffichageImage2.classList.toggle(
    "developpeurWebAffichageImage_flex"
  );
});
soudure.addEventListener("click", () => {
  soudure_afficher_image.classList.toggle("developpeurWebAffichageImage_flex");
});

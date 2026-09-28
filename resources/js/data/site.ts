// Coordonnees de l'entreprise - source unique de verite.
// Modifier ici met a jour la navbar, le footer, la page contact et le bouton WhatsApp.
export const site = {
    name: 'webprint.ma',
    phone: '05 22 48 44 25',
    phoneHref: 'tel:0522484425',

    // Numero WhatsApp au format international, sans + ni espaces.
    whatsapp: '212668746386',
    whatsappMessage: 'Bonjour webprint.ma, je souhaite obtenir des informations sur vos services d impression.',

    email: 'contact@webprint.ma',
    address: "N 3 Av 2 Mars, 5eme etage, coin Zerktouni, Rond point d'Europe, Casablanca - Maroc",

    mapEmbedUrl: 'https://maps.google.com/maps?q=Rond%20point%20d%27Europe%20Casablanca%20Maroc&z=15&output=embed',

    // Renseigner une URL pour faire apparaitre l'icone correspondante (vide = icone masquee).
    socials: {
        facebook: '',
        instagram: '',
        linkedin: '',
    },
};

export function whatsappUrl(): string {
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
}

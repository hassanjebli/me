import { faTwitter, faGithub, faWhatsapp, IconDefinition, faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";

export interface SocialLink {
  platform: string,
  username: string,
  link: string,
  icon: IconDefinition,
  pdfUsername?: string,
  copiable?: boolean
}

const mail: SocialLink = {
  platform: 'mail',
  username: 'hassanjebli2002@gmail.com',
  link: 'mailto:hassanjebli2002@gmail.com',
  icon: faEnvelope,
  copiable: true
}

const tel: SocialLink = {
  platform: 'tel',
  username: '+212617940675',
  link: 'tel:+212617940675',
  icon: faPhone,
  copiable: true
}

// const tel2: SocialLink = {
//   platform: 'tel2',
//   username: '+212614437859',
//   link: 'tel:+212614437859',
//   icon: faPhone,
//   copiable: true
// }

const Linkedin: SocialLink = {
  platform: 'Linkedin',
  username: 'in/hassanjebli',
  link: 'https://www.linkedin.com/in/hassanjebli/',
  icon: faLinkedin
}

const twitter: SocialLink = {
  platform: 'twitter',
  username: '@HassanJ66207',
  link: 'https://x.com/HassanJ66207',
  icon: faTwitter
}

const github: SocialLink = {
  platform: 'github',
  username: 'hassanjebli',
  link: 'https://github.com/hassanjebli',
  icon: faGithub
}

const whatsapp: SocialLink = {
  platform: 'whatsapp',
  username: '~Hassan',
  pdfUsername: '+212617940675 ~Hassan',
  link: 'https://wa.me/+212617940675',
  icon: faWhatsapp
}

const discord: SocialLink = {
  platform: 'discord',
  username: 'Hassan - ByteMaster',
  link: 'https://discord.com/users/855514382616100894',
  icon: faDiscord
}

const website: SocialLink = {
  platform: 'web',
  username: 'https://hassanjebli.github.io/me',
  link: 'https://hassanjebli.github.io/me',
  icon: faGlobe
}

export const allSocialLinks: SocialLink[] = [mail, tel, Linkedin, twitter, github, whatsapp, discord];

export const pdfLinks: SocialLink[] = [website, mail, tel, Linkedin, twitter, github, whatsapp];

export const socialLinks: SocialLink[] = [Linkedin, twitter, github];

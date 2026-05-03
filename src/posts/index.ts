import type { Post, PostMetadata, PostContent } from '@/utils/posts'
import AffichageI2cEsp8266, { metadata as affichageMetadata, getContent as getAffichageContent } from './AffichageI2cEsp8266.vue'
import AmbilightWs2801RaspberryPiHyperion, { metadata as ambilightWs2801Metadata, getContent as getAmbilightWs2801Content } from './AmbilightWs2801RaspberryPiHyperion.vue'
import AmbilightWs2812bTeensy, { metadata as ambilightWs2812bMetadata, getContent as getAmbilightWs2812bContent } from './AmbilightWs2812bTeensy.vue'
import BureauSurMesurePcIntegre, { metadata as bureauMetadata, getContent as getBureauContent } from './BureauSurMesurePcIntegre.vue'
import CommunicationSansFilEsp8266, { metadata as communicationMetadata, getContent as getCommunicationContent } from './CommunicationSansFilEsp8266.vue'
import ControlePriseChaconRaspberryPi, { metadata as controlePriseMetadata, getContent as getControlePriseContent } from './ControlePriseChaconRaspberryPi.vue'
import DistributeurCroquettesJeedomEsp8266, { metadata as distributeurMetadata, getContent as getDistributeurContent } from './DistributeurCroquettesJeedomEsp8266.vue'
import FlashEsp8266, { metadata as flashMetadata, getContent as getFlashContent } from './FlashEsp8266.vue'
import LuminositeJeedomEsp8266, { metadata as luminositeMetadata, getContent as getLuminositeContent } from './LuminositeJeedomEsp8266.vue'
import LuminairePlafondSuspendu, { metadata as luminaireMetadata, getContent as getLuminaireContent } from './LuminairePlafondSuspendu.vue'
import TemperaturePressionBmp180JeedomEsp8266, { metadata as temperatureMetadata, getContent as getTemperatureContent } from './TemperaturePressionBmp180JeedomEsp8266.vue'
import RenovationSalleDeBainAppartement2008, { metadata as renovationSalleDeBainMetadata, getContent as getRenovationSalleDeBainContent } from './RenovationSalleDeBainAppartement2008.vue'
import StructureRackBoisMurPlaco, { metadata as structureRackBoisMurPlacoMetadata, getContent as getStructureRackBoisMurPlacoContent } from './StructureRackBoisMurPlaco.vue'
import AmenagementPlacardPieceBureau, { metadata as amenagementPlacardMetadata, getContent as getAmenagementPlacardContent } from './AmenagementPlacardPieceBureau.vue'
import EmplacementRefrigerateurCuisineOuverte, { metadata as emplacementRefrigerateurMetadata, getContent as getEmplacementRefrigerateurContent } from './EmplacementRefrigerateurCuisineOuverte.vue'
import VisiteChoixMaisonRenovation, { metadata as visiteChoixMaisonMetadata, getContent as getVisiteChoixMaisonContent } from './VisiteChoixMaisonRenovation.vue'
import RenovationSalleDeBainMaison1970, { metadata as renovationSalleDeBainMaison1970Metadata, getContent as getRenovationSalleDeBainMaison1970Content } from './RenovationSalleDeBainMaison1970.vue'
import RenovationWcMaison1970, { metadata as renovationWcMaison1970Metadata, getContent as getRenovationWcMaison1970Content } from './RenovationWcMaison1970.vue'
import RenovationCouloirMaison1970, { metadata as renovationCouloirMaison1970Metadata, getContent as getRenovationCouloirMaison1970Content } from './RenovationCouloirMaison1970.vue'
import RenovationEntreeMaison1970, { metadata as renovationEntreeMaison1970Metadata, getContent as getRenovationEntreeMaison1970Content } from './RenovationEntreeMaison1970.vue'
import RenovationCuisineMaison1970, { metadata as renovationCuisineMaison1970Metadata, getContent as getRenovationCuisineMaison1970Content } from './RenovationCuisineMaison1970.vue'
import RenovationSalonMaison1970, { metadata as renovationSalonMaison1970Metadata, getContent as getRenovationSalonMaison1970Content } from './RenovationSalonMaison1970.vue'
import RenovationChambreParentaleMaison1970, { metadata as renovationChambreParentaleMaison1970Metadata, getContent as getRenovationChambreParentaleMaison1970Content } from './RenovationChambreParentaleMaison1970.vue'
import RenovationChambresMaison1970, { metadata as renovationChambresMaison1970Metadata, getContent as getRenovationChambresMaison1970Content } from './RenovationChambresMaison1970.vue'
import RenovationCellierBureauMaison1970, { metadata as renovationCellierBureauMaison1970Metadata, getContent as getRenovationCellierBureauMaison1970Content } from './RenovationCellierBureauMaison1970.vue'
import SdlcIsDead, { metadata as sdlcIsDeadMetadata, getContent as getSdlcIsDeadContent } from './SdlcIsDead.vue'
import CoderIsDeadEngineerIsBorn, { metadata as coderIsDeadMetadata, getContent as getCoderIsDeadContent } from './CoderIsDeadEngineerIsBorn.vue'
import AiMarketSegmentation, { metadata as aiMarketSegmentationMetadata, getContent as getAiMarketSegmentationContent } from './AiMarketSegmentation.vue'
import LanIsDead, { metadata as lanIsDeadMetadata, getContent as getLanIsDeadContent } from './LanIsDead.vue'

export interface PostComponentInfo {
  metadata: PostMetadata
  getContent: (locale: 'fr' | 'en') => PostContent
  component: any
}

const postRegistry: Record<string, PostComponentInfo> = {
  'affichage-i2c-esp8266': {
    metadata: affichageMetadata,
    getContent: getAffichageContent,
    component: AffichageI2cEsp8266
  },
  'ambilight-ws2801-raspberry-pi-hyperion': {
    metadata: ambilightWs2801Metadata,
    getContent: getAmbilightWs2801Content,
    component: AmbilightWs2801RaspberryPiHyperion
  },
  'ambilight-ws2812b-teensy': {
    metadata: ambilightWs2812bMetadata,
    getContent: getAmbilightWs2812bContent,
    component: AmbilightWs2812bTeensy
  },
  'bureau-sur-mesure-pc-integre': {
    metadata: bureauMetadata,
    getContent: getBureauContent,
    component: BureauSurMesurePcIntegre
  },
  'communication-sans-fil-esp8266': {
    metadata: communicationMetadata,
    getContent: getCommunicationContent,
    component: CommunicationSansFilEsp8266
  },
  'controle-prise-chacon-raspberry-pi': {
    metadata: controlePriseMetadata,
    getContent: getControlePriseContent,
    component: ControlePriseChaconRaspberryPi
  },
  'distributeur-croquettes-jeedom-esp8266': {
    metadata: distributeurMetadata,
    getContent: getDistributeurContent,
    component: DistributeurCroquettesJeedomEsp8266
  },
  'flash-esp8266': {
    metadata: flashMetadata,
    getContent: getFlashContent,
    component: FlashEsp8266
  },
  'luminosite-jeedom-esp8266': {
    metadata: luminositeMetadata,
    getContent: getLuminositeContent,
    component: LuminositeJeedomEsp8266
  },
  'luminaire-plafond-suspendu': {
    metadata: luminaireMetadata,
    getContent: getLuminaireContent,
    component: LuminairePlafondSuspendu
  },
  'temperature-pression-bmp180-jeedom-esp8266': {
    metadata: temperatureMetadata,
    getContent: getTemperatureContent,
    component: TemperaturePressionBmp180JeedomEsp8266
  },
  'renovation-salle-de-bain-appartement-2008': {
    metadata: renovationSalleDeBainMetadata,
    getContent: getRenovationSalleDeBainContent,
    component: RenovationSalleDeBainAppartement2008
  },
  'structure-rack-bois-mur-placo': {
    metadata: structureRackBoisMurPlacoMetadata,
    getContent: getStructureRackBoisMurPlacoContent,
    component: StructureRackBoisMurPlaco
  },
  'amenagement-placard-piece-bureau': {
    metadata: amenagementPlacardMetadata,
    getContent: getAmenagementPlacardContent,
    component: AmenagementPlacardPieceBureau
  },
  'emplacement-refrigerateur-cuisine-ouverte': {
    metadata: emplacementRefrigerateurMetadata,
    getContent: getEmplacementRefrigerateurContent,
    component: EmplacementRefrigerateurCuisineOuverte
  },
  'visite-choix-maison-renovation': {
    metadata: visiteChoixMaisonMetadata,
    getContent: getVisiteChoixMaisonContent,
    component: VisiteChoixMaisonRenovation
  },
  'renovation-salle-de-bain-maison-1970': {
    metadata: renovationSalleDeBainMaison1970Metadata,
    getContent: getRenovationSalleDeBainMaison1970Content,
    component: RenovationSalleDeBainMaison1970
  },
  'renovation-wc-maison-1970': {
    metadata: renovationWcMaison1970Metadata,
    getContent: getRenovationWcMaison1970Content,
    component: RenovationWcMaison1970
  },
  'renovation-couloir-maison-1970': {
    metadata: renovationCouloirMaison1970Metadata,
    getContent: getRenovationCouloirMaison1970Content,
    component: RenovationCouloirMaison1970
  },
  'renovation-entree-maison-1970': {
    metadata: renovationEntreeMaison1970Metadata,
    getContent: getRenovationEntreeMaison1970Content,
    component: RenovationEntreeMaison1970
  },
  'renovation-cuisine-maison-1970': {
    metadata: renovationCuisineMaison1970Metadata,
    getContent: getRenovationCuisineMaison1970Content,
    component: RenovationCuisineMaison1970
  },
  'renovation-salon-maison-1970': {
    metadata: renovationSalonMaison1970Metadata,
    getContent: getRenovationSalonMaison1970Content,
    component: RenovationSalonMaison1970
  },
  'renovation-chambre-parentale-maison-1970': {
    metadata: renovationChambreParentaleMaison1970Metadata,
    getContent: getRenovationChambreParentaleMaison1970Content,
    component: RenovationChambreParentaleMaison1970
  },
  'renovation-chambres-maison-1970': {
    metadata: renovationChambresMaison1970Metadata,
    getContent: getRenovationChambresMaison1970Content,
    component: RenovationChambresMaison1970
  },
  'renovation-cellier-bureau-maison-1970': {
    metadata: renovationCellierBureauMaison1970Metadata,
    getContent: getRenovationCellierBureauMaison1970Content,
    component: RenovationCellierBureauMaison1970
  },
  'sdlc-is-dead': {
    metadata: sdlcIsDeadMetadata,
    getContent: getSdlcIsDeadContent,
    component: SdlcIsDead
  },
  'coder-is-dead-engineer-is-born': {
    metadata: coderIsDeadMetadata,
    getContent: getCoderIsDeadContent,
    component: CoderIsDeadEngineerIsBorn
  },
  'ai-market-segmentation': {
    metadata: aiMarketSegmentationMetadata,
    getContent: getAiMarketSegmentationContent,
    component: AiMarketSegmentation
  },
  'the-lan-is-dead': {
    metadata: lanIsDeadMetadata,
    getContent: getLanIsDeadContent,
    component: LanIsDead
  }
}

export function getAllPosts(locale: 'fr' | 'en' = 'fr'): Post[] {
  return Object.values(postRegistry).map(info => {
    const content = info.getContent(locale)
    return {
      slug: info.metadata.slug,
      title: content.title,
      date: info.metadata.date,
      description: content.description,
      tags: info.metadata.tags,
      html: content.html,
      lang: locale
    }
  })
}

export function getPostBySlug(slug: string): PostComponentInfo | undefined {
  return postRegistry[slug]
}

export function getPostsByTag(tag: string, locale: 'fr' | 'en' = 'fr'): Post[] {
  return getAllPosts(locale).filter(post => post.tags?.includes(tag))
}

export function getAllTags(): Record<string, number> {
  const tags: Record<string, number> = {}
  Object.values(postRegistry).forEach(info => {
    info.metadata.tags?.forEach(tag => {
      tags[tag] = (tags[tag] || 0) + 1
    })
  })
  return tags
}

export { postRegistry }

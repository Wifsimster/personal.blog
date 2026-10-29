import type { Post, PostMetadata, PostContent } from '@/lib/posts'
import { metadata as affichageMetadata, getContent as getAffichageContent } from './AffichageI2cEsp8266'
import { metadata as ambilightWs2801Metadata, getContent as getAmbilightWs2801Content } from './AmbilightWs2801RaspberryPiHyperion'
import { metadata as ambilightWs2812bMetadata, getContent as getAmbilightWs2812bContent } from './AmbilightWs2812bTeensy'
import { metadata as bureauMetadata, getContent as getBureauContent } from './BureauSurMesurePcIntegre'
import { metadata as communicationMetadata, getContent as getCommunicationContent } from './CommunicationSansFilEsp8266'
import { metadata as controlePriseMetadata, getContent as getControlePriseContent } from './ControlePriseChaconRaspberryPi'
import { metadata as distributeurMetadata, getContent as getDistributeurContent } from './DistributeurCroquettesJeedomEsp8266'
import { metadata as flashMetadata, getContent as getFlashContent } from './FlashEsp8266'
import { metadata as luminositeMetadata, getContent as getLuminositeContent } from './LuminositeJeedomEsp8266'
import { metadata as luminaireMetadata, getContent as getLuminaireContent } from './LuminairePlafondSuspendu'
import { metadata as temperatureMetadata, getContent as getTemperatureContent } from './TemperaturePressionBmp180JeedomEsp8266'
import { metadata as renovationSalleDeBainMetadata, getContent as getRenovationSalleDeBainContent } from './RenovationSalleDeBainAppartement2008'
import { metadata as structureRackBoisMurPlacoMetadata, getContent as getStructureRackBoisMurPlacoContent } from './StructureRackBoisMurPlaco'
import { metadata as amenagementPlacardMetadata, getContent as getAmenagementPlacardContent } from './AmenagementPlacardPieceBureau'
import { metadata as emplacementRefrigerateurMetadata, getContent as getEmplacementRefrigerateurContent } from './EmplacementRefrigerateurCuisineOuverte'
import { metadata as visiteChoixMaisonMetadata, getContent as getVisiteChoixMaisonContent } from './VisiteChoixMaisonRenovation'
import { metadata as renovationSalleDeBainMaison1970Metadata, getContent as getRenovationSalleDeBainMaison1970Content } from './RenovationSalleDeBainMaison1970'
import { metadata as renovationWcMaison1970Metadata, getContent as getRenovationWcMaison1970Content } from './RenovationWcMaison1970'
import { metadata as renovationCouloirMaison1970Metadata, getContent as getRenovationCouloirMaison1970Content } from './RenovationCouloirMaison1970'
import { metadata as renovationEntreeMaison1970Metadata, getContent as getRenovationEntreeMaison1970Content } from './RenovationEntreeMaison1970'
import { metadata as renovationCuisineMaison1970Metadata, getContent as getRenovationCuisineMaison1970Content } from './RenovationCuisineMaison1970'
import { metadata as renovationSalonMaison1970Metadata, getContent as getRenovationSalonMaison1970Content } from './RenovationSalonMaison1970'
import { metadata as renovationChambreParentaleMaison1970Metadata, getContent as getRenovationChambreParentaleMaison1970Content } from './RenovationChambreParentaleMaison1970'
import { metadata as renovationChambresMaison1970Metadata, getContent as getRenovationChambresMaison1970Content } from './RenovationChambresMaison1970'
import { metadata as renovationCellierBureauMaison1970Metadata, getContent as getRenovationCellierBureauMaison1970Content } from './RenovationCellierBureauMaison1970'
import { metadata as sdlcIsDeadMetadata, getContent as getSdlcIsDeadContent } from './SdlcIsDead'
import { metadata as coderIsDeadMetadata, getContent as getCoderIsDeadContent } from './CoderIsDeadEngineerIsBorn'
import { metadata as aiMarketSegmentationMetadata, getContent as getAiMarketSegmentationContent } from './AiMarketSegmentation'
import { metadata as lanIsDeadMetadata, getContent as getLanIsDeadContent } from './LanIsDead'
import { metadata as aiTeamReflexMetadata, getContent as getAiTeamReflexContent } from './AiTeamReflex'
import { metadata as doraAiRoiReportMetadata, getContent as getDoraAiRoiReportContent } from './DoraAiRoiReport'
import { metadata as proxmoxNvmeMigrationMetadata, getContent as getProxmoxNvmeMigrationContent } from './ProxmoxNvmeMigration'
import { metadata as forfaitJoursMetadata, getContent as getForfaitJoursContent } from './ForfaitJoursSalariesDares'
import { metadata as aiAgentsH1VerdictMetadata, getContent as getAiAgentsH1VerdictContent } from './AiAgentsH1Verdict'
import { metadata as agenticAddictionMetadata, getContent as getAgenticAddictionContent } from './AgenticAddiction'
import { metadata as poIsDeadMetadata, getContent as getPoIsDeadContent } from './PoIsDeadJudgmentIsNot'
import { metadata as doctrineAsCodeMetadata, getContent as getDoctrineAsCodeContent } from './DoctrineAsCode'
import { metadata as qualityIsExecutedMetadata, getContent as getQualityIsExecutedContent } from './QualityIsExecuted'
import { metadata as skillsNotSeatsMetadata, getContent as getSkillsNotSeatsContent } from './SkillsNotSeats'
import { metadata as costOfTryingMetadata, getContent as getCostOfTryingContent } from './HomeAssistantConstellation'
import { metadata as tenYearsMetadata, getContent as getTenYearsContent } from './DixAnsDeDomotique'
import { metadata as dailyRhythmMetadata, getContent as getDailyRhythmContent } from './RythmeDeLaJournee'
import { metadata as noChoicesMetadata, getContent as getNoChoicesContent } from './AnnoncesSansChoix'
import { metadata as notTheSunMetadata, getContent as getNotTheSunContent } from './PasLeSoleil'
import { metadata as nerdInTheAiEraMetadata, getContent as getNerdInTheAiEraContent } from './NerdInTheAiEra'

export interface PostEntry {
  metadata: PostMetadata
  getContent: (locale: 'fr' | 'en') => PostContent
}

const postRegistry: Record<string, PostEntry> = {
  'affichage-i2c-esp8266': {
    metadata: affichageMetadata,
    getContent: getAffichageContent
  },
  'ambilight-ws2801-raspberry-pi-hyperion': {
    metadata: ambilightWs2801Metadata,
    getContent: getAmbilightWs2801Content
  },
  'ambilight-ws2812b-teensy': {
    metadata: ambilightWs2812bMetadata,
    getContent: getAmbilightWs2812bContent
  },
  'bureau-sur-mesure-pc-integre': {
    metadata: bureauMetadata,
    getContent: getBureauContent
  },
  'communication-sans-fil-esp8266': {
    metadata: communicationMetadata,
    getContent: getCommunicationContent
  },
  'controle-prise-chacon-raspberry-pi': {
    metadata: controlePriseMetadata,
    getContent: getControlePriseContent
  },
  'distributeur-croquettes-jeedom-esp8266': {
    metadata: distributeurMetadata,
    getContent: getDistributeurContent
  },
  'flash-esp8266': {
    metadata: flashMetadata,
    getContent: getFlashContent
  },
  'luminosite-jeedom-esp8266': {
    metadata: luminositeMetadata,
    getContent: getLuminositeContent
  },
  'luminaire-plafond-suspendu': {
    metadata: luminaireMetadata,
    getContent: getLuminaireContent
  },
  'temperature-pression-bmp180-jeedom-esp8266': {
    metadata: temperatureMetadata,
    getContent: getTemperatureContent
  },
  'renovation-salle-de-bain-appartement-2008': {
    metadata: renovationSalleDeBainMetadata,
    getContent: getRenovationSalleDeBainContent
  },
  'structure-rack-bois-mur-placo': {
    metadata: structureRackBoisMurPlacoMetadata,
    getContent: getStructureRackBoisMurPlacoContent
  },
  'amenagement-placard-piece-bureau': {
    metadata: amenagementPlacardMetadata,
    getContent: getAmenagementPlacardContent
  },
  'emplacement-refrigerateur-cuisine-ouverte': {
    metadata: emplacementRefrigerateurMetadata,
    getContent: getEmplacementRefrigerateurContent
  },
  'visite-choix-maison-renovation': {
    metadata: visiteChoixMaisonMetadata,
    getContent: getVisiteChoixMaisonContent
  },
  'renovation-salle-de-bain-maison-1970': {
    metadata: renovationSalleDeBainMaison1970Metadata,
    getContent: getRenovationSalleDeBainMaison1970Content
  },
  'renovation-wc-maison-1970': {
    metadata: renovationWcMaison1970Metadata,
    getContent: getRenovationWcMaison1970Content
  },
  'renovation-couloir-maison-1970': {
    metadata: renovationCouloirMaison1970Metadata,
    getContent: getRenovationCouloirMaison1970Content
  },
  'renovation-entree-maison-1970': {
    metadata: renovationEntreeMaison1970Metadata,
    getContent: getRenovationEntreeMaison1970Content
  },
  'renovation-cuisine-maison-1970': {
    metadata: renovationCuisineMaison1970Metadata,
    getContent: getRenovationCuisineMaison1970Content
  },
  'renovation-salon-maison-1970': {
    metadata: renovationSalonMaison1970Metadata,
    getContent: getRenovationSalonMaison1970Content
  },
  'renovation-chambre-parentale-maison-1970': {
    metadata: renovationChambreParentaleMaison1970Metadata,
    getContent: getRenovationChambreParentaleMaison1970Content
  },
  'renovation-chambres-maison-1970': {
    metadata: renovationChambresMaison1970Metadata,
    getContent: getRenovationChambresMaison1970Content
  },
  'renovation-cellier-bureau-maison-1970': {
    metadata: renovationCellierBureauMaison1970Metadata,
    getContent: getRenovationCellierBureauMaison1970Content
  },
  'sdlc-is-dead': {
    metadata: sdlcIsDeadMetadata,
    getContent: getSdlcIsDeadContent
  },
  'coder-is-dead-engineer-is-born': {
    metadata: coderIsDeadMetadata,
    getContent: getCoderIsDeadContent
  },
  'ai-market-segmentation': {
    metadata: aiMarketSegmentationMetadata,
    getContent: getAiMarketSegmentationContent
  },
  'the-lan-is-dead': {
    metadata: lanIsDeadMetadata,
    getContent: getLanIsDeadContent
  },
  'ai-team-reflex': {
    metadata: aiTeamReflexMetadata,
    getContent: getAiTeamReflexContent
  },
  'dora-ai-roi-report': {
    metadata: doraAiRoiReportMetadata,
    getContent: getDoraAiRoiReportContent
  },
  'proxmox-nvme-migration': {
    metadata: proxmoxNvmeMigrationMetadata,
    getContent: getProxmoxNvmeMigrationContent
  },
  'forfait-jours-salaries-france-2024': {
    metadata: forfaitJoursMetadata,
    getContent: getForfaitJoursContent
  },
  'ai-agents-h1-2026-verdict': {
    metadata: aiAgentsH1VerdictMetadata,
    getContent: getAiAgentsH1VerdictContent
  },
  'agentic-ai-addiction': {
    metadata: agenticAddictionMetadata,
    getContent: getAgenticAddictionContent
  },
  'po-is-dead-judgment-is-not': {
    metadata: poIsDeadMetadata,
    getContent: getPoIsDeadContent
  },
  'doctrine-as-code': {
    metadata: doctrineAsCodeMetadata,
    getContent: getDoctrineAsCodeContent
  },
  'quality-is-executed': {
    metadata: qualityIsExecutedMetadata,
    getContent: getQualityIsExecutedContent
  },
  'skills-not-seats': {
    metadata: skillsNotSeatsMetadata,
    getContent: getSkillsNotSeatsContent
  },
  'nerd-in-the-ai-era': {
    metadata: nerdInTheAiEraMetadata,
    getContent: getNerdInTheAiEraContent
  },
  'cost-of-trying': {
    metadata: costOfTryingMetadata,
    getContent: getCostOfTryingContent
  },
  'ten-years-of-home-automation': {
    metadata: tenYearsMetadata,
    getContent: getTenYearsContent
  },
  'daily-rhythm': {
    metadata: dailyRhythmMetadata,
    getContent: getDailyRhythmContent
  },
  'no-choices': {
    metadata: noChoicesMetadata,
    getContent: getNoChoicesContent
  },
  'not-the-sun': {
    metadata: notTheSunMetadata,
    getContent: getNotTheSunContent
  }
}

export interface PostQueryOptions {
  includeDrafts?: boolean
}

export function isDraft(info: PostEntry): boolean {
  return info.metadata.draft === true
}

export function isScheduled(info: PostEntry): boolean {
  return info.metadata.date > new Date().toISOString().slice(0, 10)
}

function isHidden(info: PostEntry): boolean {
  return isDraft(info) || isScheduled(info)
}

function toPost(info: PostEntry, locale: 'fr' | 'en'): Post {
  const content = info.getContent(locale)
  return {
    slug: info.metadata.slug,
    title: content.title,
    date: info.metadata.date,
    description: content.description,
    tags: info.metadata.tags,
    html: content.html,
    lang: locale,
    draft: info.metadata.draft === true
  }
}

export function getAllPosts(locale: 'fr' | 'en' = 'fr', options: PostQueryOptions = {}): Post[] {
  return Object.values(postRegistry)
    .filter(info => options.includeDrafts || !isHidden(info))
    .map(info => toPost(info, locale))
}

export function getDraftPosts(locale: 'fr' | 'en' = 'fr'): Post[] {
  return Object.values(postRegistry)
    .filter(isHidden)
    .map(info => toPost(info, locale))
}

export function getPostBySlug(slug: string): PostEntry | undefined {
  return postRegistry[slug]
}

export function getPostsByTag(tag: string, locale: 'fr' | 'en' = 'fr'): Post[] {
  return getAllPosts(locale).filter(post => post.tags?.includes(tag))
}

export function getAllTags(): Record<string, number> {
  const tags: Record<string, number> = {}
  Object.values(postRegistry).forEach(info => {
    if (isHidden(info)) return
    info.metadata.tags?.forEach(tag => {
      tags[tag] = (tags[tag] || 0) + 1
    })
  })
  return tags
}

export { postRegistry }

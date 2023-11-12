import './polyfills.server.mjs';
import {
  ActivatedRoute
} from "./chunk-NT6BZYSI.mjs";
import {
  BehaviorSubject,
  EMPTY,
  distinct,
  filter,
  from,
  map,
  of,
  switchMap,
  take,
  tap,
  toArray,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-N7L7EGLX.mjs";

// src/app/models/Cite.ts
var Cite = class {
  constructor() {
    this.tags = [];
    this.tags = [];
  }
  getId() {
    return this.id;
  }
  setId(id) {
    this.id = id;
    return this;
  }
  getAuthor() {
    return this.author;
  }
  setAuthor(author) {
    this.author = author;
    return this;
  }
  getCite() {
    return this.cite;
  }
  setCite(cite) {
    this.cite = cite;
    return this;
  }
  getTags() {
    return this.tags ?? [];
  }
  setTags(tags = []) {
    if (tags === void 0) {
      return this;
    }
    this.tags = tags;
    return this;
  }
  addTag(tag) {
    if (this.tags && !this.tags.includes(tag.trim())) {
      this.tags.push(tag.trim());
    }
    return this;
  }
  hasTags() {
    return !!this.tags.length;
  }
};

// src/app/fixtures/data.ts
var data = [
  {
    cite: `Chaque commencement rec\xE8le une magie cach\xE9e.`,
    author: `Hermann Hesse`,
    tags: ["espoir"]
  },
  {
    cite: `Rarement nous pensons \xE0 ce que nous avons, mais souvent \xE0 ce qui nous manque.`,
    author: `Arthur Schopenhauer`,
    tags: ["simplicit\xE9"]
  },
  {
    cite: `Comme le dauphin j'ai le dos fin.`,
    author: `Ma\xEEtre Reiki Kanak`
  },
  {
    cite: `L'\xE2me porte les couleurs de tes pens\xE9es.`,
    author: `Marc Aur\xE8le`
  },
  {
    cite: `Apprenons \xE0 tendre la main pas seulement pour recevoir, mais \xE9galement pour donner.`,
    author: `Wembo Jah Olela`,
    tags: ["g\xE9n\xE9rosit\xE9"]
  },
  {
    cite: `Peu importe o\xF9 nous sommes, ma maison n'est pas un lieu, ma maison c'est toi.`,
    author: `Fynn Kliemann`,
    tags: ["amour"]
  },
  {
    cite: `Pour faire du bien, personne n'a besoin de r\xE9fl\xE9chir.`,
    author: `Johann Wolfgang Von Goethe`,
    tags: ["bienveillance"]
  },
  {
    cite: `Il n'y a que deux fa\xE7ons de vivre sa vie : l'une en faisant comme si rien n'\xE9tait un miracle, l'autre en faisant comme si tout \xE9tait un miracle.`,
    author: `Albert Einstein`,
    tags: ["joie"]
  },
  {
    cite: `La facult\xE9 de se mettre dans la peau des autres et de r\xE9fl\xE9chir \xE0 la mani\xE8re dont on agirait \xE0 leur place est tr\xE8s utile si on veut apprendre \xE0 aimer quelqu'un.`,
    author: `Dalai Lama`,
    tags: ["amour"]
  },
  {
    cite: `R\xE9pands tes bienfaits sur tes amis, pour qu'ils t'aiment plus tendrement encore ; r\xE9pands-les sur tes ennemis, pour qu'ils deviennent enfin tes amis.`,
    author: `Cl\xE9obus de Lindos`,
    tags: ["amiti\xE9"]
  },
  {
    cite: `Souris au monde et le monde te sourira.`,
    author: `Soeur Emmanuelle`,
    tags: ["joie"]
  },
  {
    cite: `L'humour a non seulement quelque chose de lib\xE9rateur, mais encore quelque chose de sublime et d'\xE9lev\xE9.`,
    author: `Sigmund Freud`,
    tags: ["rire"]
  },
  {
    cite: `On ne voit bien qu'avec le coeur. L'essentiel est invisible pour les yeux.`,
    author: `Antoine de Saint-Exup\xE9ry`
  },
  {
    cite: `Seuls les sens peuvent gu\xE9rir l'\xE2me, tout comme l'\xE2me seule peut gu\xE9rir les sens.`,
    author: `Oscar Wilde`
  },
  {
    cite: `L'amour n'est pas dans l'autre, il est en nous-m\xEAmes ; nous le r\xE9veillons. Mais pour ce r\xE9veil, nous avons besoin de l'autre.`,
    author: `Paulo Coelho`
  },
  {
    cite: `L'ornement de la main, ce sont ses doigts.`,
    author: `Proverbe africain`,
    tags: ["proverbe"]
  },
  {
    cite: `L'optimiste rit pour oublier ; le pessimiste oublie de rire.`,
    author: `Anonyme`
  },
  {
    cite: `Parfois on ne per\xE7oit l'amour car la vie quotidienne peut nous rendre aveugle.`,
    author: `Anonyme`
  },
  {
    cite: `Ecouter, c'est aimer.`,
    author: `Fran\xE7ois Lelord`,
    tags: ["amour"]
  },
  {
    cite: `Si tu veux la lune, ne te cache pas durant la nuit. Si tu veux une rose, n'aie pas peur des \xE9pines. Si tu veux l'amour, ne cache pas ta vrai personne.`,
    author: `Rumi`,
    tags: ["amour"]
  },
  {
    cite: `Les r\xEAves \xE9veill\xE9s maintiennent notre \xE9quilibre mental.`,
    author: `Elisabeth Maria Maurer`
  },
  {
    cite: `L'\xE9nergie suit les pens\xE9es.`,
    author: `Tony Robbins`
  },
  {
    cite: `Les questions sont les cl\xE9s pour acc\xE9der au tr\xE9sors.`,
    author: `Georg-Wilhelm Exler`
  },
  {
    cite: `L'amour ne voit pas avec les yeux mais avec l'\xE2me.`,
    author: `William Shakespeare`
  },
  {
    cite: `L'espoir, c'est rentrer sous la pluie et sortir sous un beau soleil.`,
    author: `Proverbe africain`,
    tags: ["proverbe"]
  },
  {
    cite: `Les folies sont les seules choses qu'on ne regrette jamais.`,
    author: `Oscar Wilde`
  },
  {
    cite: `Un sourire est une clef secr\xE8te qui ouvre bien des coeurs.`,
    author: `Baden-Powell`
  },
  {
    cite: `Le chocolat plonge des \xEAtres par ailleurs normaux dans d'\xE9tranges \xE9tats extatiques.`,
    author: `John West`
  },
  {
    cite: `On a deux vies. La deuxi\xE8me commence le jour o\xF9 on r\xE9alise qu'on en a juste une.`,
    author: `Confucius`
  },
  {
    cite: `Je vais \xEAtre jaloux de cette tour. Elle est plus c\xE9l\xE8bre que moi.`,
    author: `Gustave Eiffel`
  },
  {
    cite: `Je me moque de savoir beaucoup de choses : je veux savoir des choses que j'aime.`,
    author: `Jules Renard`
  },
  {
    cite: `Nous portons en nous des merveilles que nous cherchons en dehors de nous.`,
    author: `Thomas Browne`
  },
  {
    cite: `L\xE0 o\xF9 l'on s'aime il ne fait jamais nuit.`,
    author: `Proverbe africain`,
    tags: ["proverbe"]
  },
  {
    cite: `Le risque de prendre une mauvaise d\xE9cision n'est rien compar\xE9 \xE0 la terreur de l'ind\xE9cision.`,
    author: `Maimonide`
  },
  {
    cite: `En tentant l'impossible, on peut atteindre le plus haut niveau du possible.`,
    author: `August Strindberg`
  },
  {
    cite: `Souris \xE0 la vie pour qu'elle te sourit.`,
    author: `Proverbe tunisien`,
    tags: ["proverbe"]
  },
  {
    cite: `A coeur vaillant rien d'impossible.`,
    author: `Jacques Coeur`
  },
  {
    cite: `L'important n'est pas ce que l'on regarde mais ce que l'on voit.`,
    author: `Henry David Thoreau`
  },
  {
    cite: `A travers les feuilles d'un bon livre, on pourra entendre un \xE9cho qui ressemble aux bruits des f\xF4rets.`,
    author: `Henry David Thoreau`
  },
  {
    cite: `Assure-toi que la bougie est allum\xE9e avant d'\xE9teindre l'allumette.`,
    author: `Proverbe cr\xE9ole`,
    tags: ["proverbe"]
  },
  {
    cite: `Quand l'amour grandit en toi, la beaut\xE9 fat de m\xEAme. Car l'amour est la beaut\xE9 de l'\xE2me.`,
    author: `Marcel Proust`
  },
  {
    cite: `Le v\xE9ritable voyage de d\xE9couverte ne consiste pas \xE0 chercher de nouveaux paysages, mais \xE0 avoir de nouveaux yeux.`,
    author: `Marcel Proust`
  },
  {
    cite: `Dans la vie tu as deux choix le matin : soit tu te recouches pour poursuivre ton r\xEAve, soit tu te l\xE8ves pour le r\xE9aliser.`,
    author: `Axel Albanel`
  },
  {
    cite: `La diplomatie, c'est faire et dire les plus vilaines choses de la mani\xE8re la plus \xE9l\xE9gante.`,
    author: `Isaac Goldberg`
  },
  {
    cite: `Choisissez un travail que vous aimez et vous n'aurez pas \xE0 travailler un seul jour de votre vie.`,
    author: `Confucius`
  },
  {
    cite: `L'imagination vaut bien des voyages et elle co\xFBte moins cher.`,
    author: `George William Curtis`
  },
  {
    cite: `Faites que le r\xEAve d\xE9vore votre vie, afin que la vie ne d\xE9vore votre r\xEAve.`,
    author: `Antoine de Saint-Exup\xE9ry`
  },
  {
    cite: `Deviens sans cesse celui que tu es, sois le ma\xEEtre et le sculpteur de toi-m\xEAme.`,
    author: `Friederich Nietzsche`
  },
  {
    cite: `La nature nous a donn\xE9 une langue et deux oreilles, afin que nous \xE9coutions le double de ce que nous disons.`,
    author: `Z\xE9non`
  },
  {
    cite: `Chaque baiser est un tremblement de terre.`,
    author: `George Gordon Byron`
  },
  {
    cite: `Un grand \xE9crivain se remarque au nombre de pages qu'il ne publie pas.`,
    author: `St\xE9phane Mallarm\xE9`
  },
  {
    cite: `Fais ce que tu aimes et fais-le souvent.`,
    author: `Anonyme`
  },
  {
    cite: `Aimer savoir est humain, savoir aimer est divin.`,
    author: `Joseph Roux`
  },
  {
    cite: `Plus le visage est s\xE9rieux, plus le sourire est beau.`,
    author: `Fran\xE7ois Ren\xE9 de Chateaubriand`
  },
  {
    cite: `Le sourire que tu envoies revient vers toi.`,
    author: `Proverbe hindou`,
    tags: ["proverbe"]
  },
  {
    cite: `Le sourire fait fondre la glace, installe la confiance et gu\xE9rit les blessures, c'est la clef des relations humaines sinc\xE8res.`,
    author: `Voltaire`
  },
  {
    cite: `On n'est jamais puni pour avoir fait mourir de rire.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `Il y a autant de beaut\xE9s qu'il y a de mani\xE8res habituelles de chercher le bonheur.`,
    author: `Charles Baudelaire`
  },
  {
    cite: `Toute r\xE9v\xE9lation d'un secret est la faute de celui qui l'a confi\xE9.`,
    author: `Jean de La Bruy\xE8re`
  },
  {
    cite: `A celui qui sait attendre tout vient \xE0 temps .`,
    author: `Fran\xE7ois Rabelais`
  },
  {
    cite: `On voyage pour changer, non de lieu, mais d'id\xE9es.`,
    author: `Hippolyte Taine`
  },
  {
    cite: `Fruits et racines ont m\xEAme commune mesure qui est l'arbre.`,
    author: `Antoine de Saint-Exup\xE9ry`
  },
  {
    cite: `La beaut\xE9 est dans les yeux de celui qui regarde.`,
    author: `Oscar Wilde`
  },
  {
    cite: `Les amis sont des compagnons de voyage, qui nous aident \xE0 avancer sur le chemin d\u2019une vie plus heureuse.`,
    author: `Pythagore`
  },
  {
    cite: `Le plaisir est le bonheur des fous, le bonheur est le plaisir des sages.`,
    author: `Jules Barbey d'Aurevilly`
  },
  {
    cite: `La joie est en tout, il suffit de savoir l'extraire.`,
    author: `Confucius`
  },
  {
    cite: `La table est l'entremetteuse de l'amiti\xE9.`,
    author: `Proverbe fran\xE7ais`,
    tags: ["proverbe"]
  },
  {
    cite: `Le g\xE9nie, c'est l'enfance retrouv\xE9e \xE0 volont\xE9.`,
    author: `Charles Baudelaire`
  },
  {
    cite: `Le rem\xE8de \xE0 l'ennui c'est la curiosit\xE9. La curiosit\xE9 elle, est sans rem\xE8de.`,
    author: `Anonyme`
  },
  {
    cite: `Il n'est pas de plaisir plus doux que de surprendre un homme en lui donnant plus qu'il n'esp\xE8re.`,
    author: `Charles Baudelaire`
  },
  {
    cite: `Sachez vous \xE9loigner car, lorsque vous reviendrez \xE0 votre travail votre jugement sera plus s\xFBr.`,
    author: `L\xE9onard de Vinci`
  },
  {
    cite: `C'est l'incertitude qui nous charme. Tout devient merveilleux dans la brume.`,
    author: `Oscar Wilde`
  },
  {
    cite: `La bonne volont\xE9 raccourcit le chemin.`,
    author: `Proverbe br\xE9silien`,
    tags: ["proverbe"]
  },
  {
    cite: `Bonne cuisine et bon vin, c'est le paradis sur terre.`,
    author: `Henri IV`
  },
  {
    cite: `La musique est la langue des \xE9motions.`,
    author: `Emmanuel Kant`
  },
  {
    cite: `Gu\xE9rir parfois, soulager souvent, \xE9couter toujours.`,
    author: `Louis Pasteur`
  },
  {
    cite: `Les mots manquent aux \xE9motions.`,
    author: `Victor Hugo`
  },
  {
    cite: `Le plaisir se ramasse la joie se cueille et le bonheur se cultive.`,
    author: `Bouddha`
  },
  {
    cite: `Que ton baiser ait l'ardeur du soleil et la rose te donnera tout son parfum.`,
    author: `Proverbe kurde`,
    tags: ["proverbe"]
  },
  {
    cite: `Quand ce que vous pensez, ce que vous dites et ce que vous faites sont en harmonie, le bonheur vous appartient.`,
    author: `Gandhi`
  },
  {
    cite: `Qui veut faire le bonheur des autres a d\xE9j\xE0 fait le sien.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `La sagesse, c'est d'avoir des r\xEAves suffisamment grands pour ne pas les perdre de vue lorsqu'on les poursuit.`,
    author: `Oscar Wilde`
  },
  {
    cite: `Eclaire demain avec aujourd'hui !`,
    author: `Elizabeth Barret Browning`
  },
  {
    cite: `Apprends \xE0 \xE9crire tes blessures dans le sable et \xE0 graver tes joies dans la pierre.`,
    author: `Lao Tseu`
  },
  {
    cite: `Maison de paille o\xF9 l'on rit vaut mieux qu'un palais o\xF9 l'on pleure.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `Toute l'invention consiste \xE0 faire quelque chose de rien.`,
    author: `Jean Racine`
  },
  {
    cite: `L'id\xE9al de l'amiti\xE9 c'est de se sentir un et de rester deux.`,
    author: `Anne Sophie Swetchine`
  },
  {
    cite: `Un seul homme arm\xE9 de courage vaut une majorit\xE9.`,
    author: `Andrew Jackson`
  },
  {
    cite: `La Tour Eiffel ne devait durer que 20 ans, ... elle est devenue aussi \xE9ternelle que Paris !`,
    author: `Anonyme`
  },
  {
    cite: `En se posant sur la branche, le papillon craint de la briser.`,
    author: `Proverbe arm\xE9nien`,
    tags: ["proverbe"]
  },
  {
    cite: `Il ne faut avoir aucun regret pour le pass\xE9, aucun remords pour le pr\xE9sent, et une confiance in\xE9branlable pour l'avenir.`,
    author: `Jean Jaur\xE8s`
  },
  {
    cite: `Un peu de jalousie \xE9veille un amour heureux qui s'endort.`,
    author: `Mme Deshouli\xE8res`
  },
  {
    cite: `La simplicit\xE9 est la sophistication supr\xEAme.`,
    author: `L\xE9onard de Vinci`
  },
  {
    cite: `Supprimons de la vie toute raison d'ennuis : car il est court le temps qui nous est imparti !`,
    author: `M\xE9nandre`
  },
  {
    cite: `Quelque d\xE9licat que l'on soit en amour, on pardonne plus de fautes que dans l'amiti\xE9.`,
    author: `Jean de La Bruy\xE8re`
  },
  {
    cite: `Le travail, en autres avantages, a celui de raccourcir les journ\xE9es et d'\xE9tendre la vie.`,
    author: `Denis Diderot`
  },
  {
    cite: `Si nous prenons la nature pour guide, nous ne nous \xE9garerons jamais.`,
    author: `Cic\xE9ron`
  },
  {
    cite: `L'accent circonflexe est l'hirondelle de l'\xE9criture.`,
    author: `Jules Renard`
  },
  {
    cite: `L'\xE9motion artistique cesse o\xF9 l'analyse et la pens\xE9e interviennent.`,
    author: `Max Jacob`
  },
  {
    cite: `La pens\xE9e n'est qu'un \xE9clair au milieu de la nuit. Mais c'est cet \xE9clair qui est tout.`,
    author: `Henri Poincar\xE9`
  },
  {
    cite: `L'accent est l'\xE2me du discours, il lui donne le sentiment et la v\xE9rit\xE9.`,
    author: `Jean-Jacques Rousseau`
  },
  {
    cite: `La crainte du danger est mille fois plus terrifiante que le danger pr\xE9sent.`,
    author: `Daniel Defoe`
  },
  {
    cite: `La lutte donne au triomphe la saveur de la passion, et la victoire embellit la conqu\xEAte.`,
    author: `Georges Meredith`
  },
  {
    cite: `De toutes les passions, la seule vraiment respectable me parait \xEAtre la gourmandise.`,
    author: `Guy de Maupassant`
  },
  {
    cite: `Jamais les mots ne manquent aux id\xE9es ; ce sont les id\xE9es qui manquent aux mots.`,
    author: `Joseph Joubert`
  },
  {
    cite: `L'\xE2ge auquel on partage tout est g\xE9n\xE9ralement l'\xE2ge o\xF9 on n'a rien.`,
    author: `Alphonse Karr`
  },
  {
    cite: `Une erreur originale vaut mieux qu'une v\xE9rit\xE9 banale.`,
    author: `Fiodor Dosto\xEFevski`
  },
  {
    cite: `Le veinard est celui qui arrive \xE0 tout ; le malchanceux est celui \xE0 qui tout arrive.`,
    author: `Eug\xE8ne Labiche`
  },
  {
    cite: `La seule limite \xE0 notre \xE9panouissement de demain sera nos doutes d'aujourd'hui.`,
    author: `Franklin Delano Roosevelt`
  },
  {
    cite: `Il n'y a pas de moyen pour polir le h\xE9risson.`,
    author: `Aristophane`
  },
  {
    cite: `L'amour qui na\xEEt subitement est le plus long \xE0 gu\xE9rir.`,
    author: `Jean de La Bruy\xE8re`
  },
  {
    cite: `Il n'y a pas de plus grande joie que celle qu'on n'attend pas.`,
    author: `Sophocle`
  },
  {
    cite: `Quand la col\xE8re emplit ton coeur, ne laisse pas ta langue aboyer en vain.`,
    author: `Sappho`
  },
  {
    cite: `Un grain de gaiet\xE9 assaisonne tout.`,
    author: `Baltasar Gracian`
  },
  {
    cite: `Qui rougit est d\xE9j\xE0 coupable, la vraie innocence n'a honte de rien.`,
    author: `Jean-Jacques Rousseau`
  },
  {
    cite: `Il n'y a point de g\xE9nie sans grain de folie.`,
    author: `Aristote`
  },
  {
    cite: `J'aime le lit, c'est le seul endroit o\xF9, comme le chat, je puis faire le mort en respirant, tout en \xE9tant vivant.`,
    author: `Arthur Cravan`
  },
  {
    cite: `Le seul homme \xE0 ne jamais faire d'erreur est celui qui ne fait rien.`,
    author: `Th\xE9odore Roosevelt`
  },
  {
    cite: `Le plus grand voyageur est celui qui a su faire une fois le tour de lui-m\xEAme.`,
    author: `Confucius`
  },
  {
    cite: `C'est la nuit qu'il est beau de croire \xE0 la lumi\xE8re.`,
    author: `Edmond Rostand`
  },
  {
    cite: `Pour l'amour d'une rose, le jardinier devient l'esclave de mille \xE9pines.`,
    author: `Proverbe turc`,
    tags: ["proverbe"]
  },
  {
    cite: `D\xE9ploie ton jeune courage, enfant ; c'est ainsi qu'on s'\xE9l\xE8ve jusqu'aux astres.`,
    author: `Virgile`
  },
  {
    cite: `Nul ne veut le bien public que quand il s'accorde avec le sien.`,
    author: `Jean-Jacques Rousseau`
  },
  {
    cite: `On avale \xE0 pleine gorg\xE9e le mensonge qui nous flatte, et l'on boit goutte \xE0 goutte une v\xE9rit\xE9 qui nous est am\xE8re.`,
    author: `Denis Diderot`
  },
  {
    cite: `Appelons hommes de g\xE9nie qui font vite ce que nous faisons lentement.`,
    author: `Joseph Joubert`
  },
  {
    cite: `Rien n'est s\xE9rieux en ce bas monde que le rire.`,
    author: `Gustave Flaubert`
  },
  {
    cite: `Les soucis enlaidissent, c'est la joie qui fait fleurir.`,
    author: `Proverbe berb\xE8re`,
    tags: ["proverbe"]
  },
  {
    cite: `Qui fait rire l'esprit se rend ma\xEEtre du coeur.`,
    author: `Cardinal de Bernis`
  },
  {
    cite: `On ne peut apprendre au crabe \xE0 marcher droit.`,
    author: `Aristophane`
  },
  {
    cite: `Ferme les yeux et tu verras.`,
    author: `Joseph Joubert`
  },
  {
    cite: `L'homme le plus heureux est celui qui fait le bonheur d'un plus grand nombre d'autres.`,
    author: `Denis Diderot`
  },
  {
    cite: `A l'oiseau, le nid; \xE0 l'araign\xE9e, la toile; \xE0 l'homme, l'amiti\xE9.`,
    author: `William Blake`
  },
  {
    cite: `Rien ne s'accomplit dans ce monde sans passion.`,
    author: `Georg Whilhelm Friedrich Hegel`
  },
  {
    cite: `N'engage pas de d\xE9bat lors d'un d\xEEner car celui qui n'a pas faim aura le dernier mot.`,
    author: `Richard Whately`
  },
  {
    cite: `Les paroles sages tombent quelquefois dans l'oreille d'un sourd ; mais un mot gentil n'est jamais perdu.`,
    author: `Arthur Helps`
  },
  {
    cite: `Je crois beaucoup en la chance, et je constate que plus je travaille, plus elle me sourit.`,
    author: `Thomas Jefferson`
  },
  {
    cite: `L'exp\xE9rience est un peigne que la nature nous donne une fois que nous sommes chauves.`,
    author: `Proverbe belge`,
    tags: ["proverbe"]
  },
  {
    cite: `Le rire et le sommeil sont les meilleurs rem\xE8des du monde.`,
    author: `Proverbe irlandais`,
    tags: ["proverbe"]
  },
  {
    cite: `L'enfance est un papillon qui se h\xE2te de br\xFBler ses blanches ailes aux flammes de la jeunesse.`,
    author: `Aloysius Bertrand`
  },
  {
    cite: `La puissance, c'est imposer sa volont\xE9 aux autres. La force, c'est se l'imposer \xE0 soi-m\xEAme.`,
    author: `Lao Zi`
  },
  {
    cite: `A No\xEBl, je n'ai pas plus envie de rose que je ne voudrais de neige au printemps. J'aime chaque saison pour ce qu'elle apporte.`,
    author: `William Shakespeare`
  },
  {
    cite: `Le meilleur secret pour ne jamais tomber c'est de rester toujours assis.`,
    author: `Stendhal`
  },
  {
    cite: `La vari\xE9t\xE9 est la v\xE9ritable \xE9pice de la vie. Qui lui donne toute sa saveur.`,
    author: `William Cowper`
  },
  {
    cite: `Pour retrouver sa jeunesse, il n'y a qu'\xE0 recommencer ses folies.`,
    author: `Th\xE9odore Roosevelt`
  },
  {
    cite: `Le rire que tu offres te sera rendu au centuple.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `Pour les habits, rien ne vaut les neufs, pour les amis, rien ne vaut les vieux.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `Il y a toujours un peu de folie dans l'amour mais il y a toujours un peu de raison dans la folie.`,
    author: `Friederich Nietzsche`
  },
  {
    cite: `Faire caca, c'est se lib\xE9rer d'un poids.`,
    author: `Camille Richard`
  },
  {
    cite: `L'exp\xE9rience est le nom que l'on donne \xE0 ses erreurs.`,
    author: `Oscar Wilde`
  },
  {
    cite: `Le bonheur est la plus grande des conqu\xEAtes, celle qu'on fait contre le destin qui nous est impos\xE9.`,
    author: `Albert Camus`
  },
  {
    cite: `On ne devrait vivre que pour le plaisir. Rien ne vieillit comme le bonheur.`,
    author: `Oscar Wilde`
  },
  {
    cite: `Ne juge aucun homme avant d'avoir march\xE9 avec ses mocassins durant deux lunes.`,
    author: `Proverbe am\xE9rindien`,
    tags: ["proverbe"]
  },
  {
    cite: `Vous ne parviendrez jamais \xE0 faire des sages si vous ne faites d'abord des polissons.`,
    author: `Jean-Jacques Rousseau`
  },
  {
    cite: `Ce qui \xE9tonne, \xE9tonne une fois, mais ce qui est admirable est de plus en plus admir\xE9.`,
    author: `Joseph Joubert`
  },
  {
    cite: `Ce qui est admirable, ce n'est pas que le champ des \xE9toiles soit si vaste, c'est que l'homme l'ait mesur\xE9.`,
    author: `Anatole France`
  },
  {
    cite: `Le tout c'est d'avoir du g\xE9nie \xE0 vingt ans et du talent \xE0 quatre-vingts.`,
    author: `Camille Corot`
  },
  {
    cite: `Une image vaut mille mots.`,
    author: `Confucius`
  },
  {
    cite: `La mesure de l'amour c'est d'aimer sans mesure.`,
    author: `Saint-Augustin`
  },
  {
    cite: `No\xEBl n'est pas un jour ni une saison, c'est un \xE9tat d'esprit.`,
    author: `John Calvin Coolidge`
  },
  {
    cite: `Il n'est pas d'hiver sans neige, de printemps sans soleil, et de joie sans \xEAtre partag\xE9e.`,
    author: `Proverbe serbe`,
    tags: ["proverbe"]
  },
  {
    cite: `Les plus beaux mots du monde ne sont que des sons inutiles si vous ne pouvez pas les comprendre.`,
    author: `Anatole France`
  },
  {
    cite: `Si haut que parvienne une chose lanc\xE9e, c'est \xE0 terre qu'elle retourne.`,
    author: `Proverbe africain`,
    tags: ["proverbe"]
  },
  {
    cite: `H\xE2te-toi de bien vivre et songe que chaque jour est \xE0 lui seul une vie.`,
    author: `S\xE9n\xE8que`
  },
  {
    cite: `Tout \xE2ge porte ses fruits, il faut savoir les cueillir.`,
    author: `Raymond Radiguet`
  },
  {
    cite: `Nul devoir n'est plus sous-estim\xE9 que celui d'\xEAtre heureux.`,
    author: `Robert Louis Stevenson`
  },
  {
    cite: `Peu de gens ont le courage d'\xEAtre l\xE2ches devant t\xE9moins.`,
    author: `Th\xE9ophile Gautier`
  },
  {
    cite: `L'or te donne la terre, la terre te donne de l'or.`,
    author: `Proverbe indien`,
    tags: ["proverbe"]
  },
  {
    cite: `Le regard est le m\xE9diateur des coeurs.`,
    author: `Anonyme`
  },
  {
    cite: `Ce n'est pas parce que les choses sont difficiles que nous n'osons pas, c'est parce que nous n'osons pas qu'elles sont difficiles.`,
    author: `S\xE9n\xE8que`
  },
  {
    cite: `En art comme en amour, l'instinct suffit.`,
    author: `Anatole France`
  },
  {
    cite: `Le cadeau, dira-t-on, n'a rien de somptueux, mais venant d'un ami, tout nous est pr\xE9cieux.`,
    author: `Th\xE9ocrite`
  },
  {
    cite: `La franchise ne consiste pas \xE0 dire tout ce que l'on pense mais \xE0 penser tout ce que l'on dit.`,
    author: `Proverbe tchadien`,
    tags: ["proverbe"]
  },
  {
    cite: `Les petits cadeaux entretiennent l'amiti\xE9. Le premier qui a dit dela voulait se faire donner quelque chose.`,
    author: `Eug\xE8ne Scribe`
  },
  {
    cite: `Les premiers sentiments sont toujours les plus naturels.`,
    author: `Madame de S\xE9vign\xE9`
  },
  {
    cite: `Qui ne peut comme il veut, doit vouloir comme il peut.`,
    author: `T\xE9rence`
  },
  {
    cite: `Etre jeune, c'est avoir un esprit qui calcule et un coeur qui ne calcule pas.`,
    author: `Ren\xE9 Bazin`
  },
  {
    cite: `La s\xE9duction supr\xEAme n'est pas d'exprimer ses sentiments. C'est de les faire soup\xE7onner.`,
    author: `Jules Barbey d'Aurevilly`
  },
  {
    cite: `L'action ne doit pas \xEAtre une r\xE9action mais une cr\xE9ation.`,
    author: `Censier (droit f\xE9odal)`
  },
  {
    cite: `On ne devrait s'\xE9tonner que de pouvoir encore s'\xE9tonner.`,
    author: `Fran\xE7ois de La Rochefoucauld`
  },
  {
    cite: `Le coeur n'a pas de ma\xEEtre, il n'est pas un esclave, et de toute contrainte il sait briser l'entrave.`,
    author: `Adam Mickiewicz`
  },
  {
    cite: `Le pass\xE9 est un phare, et non un port.`,
    author: `Proverbe russe`,
    tags: ["proverbe"]
  },
  {
    cite: `La parole est moiti\xE9 \xE0 celui qui parle, moiti\xE9 \xE0 celui qui \xE9coute.`,
    author: `Michel de Montaigne`
  },
  {
    cite: `Un po\xE8me est un myst\xE8re dont le lecteur doit chercher la clef.`,
    author: `St\xE9phane Mallarm\xE9`
  },
  {
    cite: `La vie est trop courte pour \xEAtre petite.`,
    author: `Proverbe anglais`,
    tags: ["proverbe"]
  },
  {
    cite: `Dans une avalanche, aucun flocon ne se sent jamais responsable.`,
    author: `Voltaire`
  },
  {
    cite: `A vingt ans, c'est la volont\xE9 qui r\xE8gne, \xE0 trente ans l'esprit, et \xE0 quarante le jugement.`,
    author: `Benjamin Franklin`
  },
  {
    cite: `Ayez le courage de ne pas savoir un grand nombre de choses afin d'\xE9viter la certitude de ne rien savoir.`,
    author: `Sydney Smith`
  },
  {
    cite: `Je crois pouvoir dire d'un poste \xE9minent et d\xE9licat qu'on y monte plus ais\xE9ment qu'on ne s'y conserve.`,
    author: `Jean de La Bruy\xE8re`
  },
  {
    cite: `Ecrire, c'est d\xE9j\xE0 mettre du noir sur du blanc.`,
    author: `St\xE9phane Mallarm\xE9`
  },
  {
    cite: `Il est temps de vivre la vie que tu t'es imagin\xE9e.`,
    author: `Henry James`
  },
  {
    cite: `Qu'importe aux coeurs unis ce qui change autour d'eux.`,
    author: `Alphonse de Lamartine`
  },
  {
    cite: `N'allez pas l\xE0 o\xF9 le chemin peut mener. Allez l\xE0 o\xF9 il n'y a pas de chemin et laissez une trace.`,
    author: `Ralph Waldo Emerson`
  },
  {
    cite: `Lorsqu'on tire sur un seul fil de la nature, on d\xE9couvre qu'il est attach\xE9 au reste du monde.`,
    author: `John Muir`
  },
  {
    cite: `L'exp\xE9rience est une lanterne que l'on porte sur le dos et qui n'\xE9claire jamais que le chemin parcouru.`,
    author: `Confucius`
  },
  {
    cite: `La nature fait les choses sans se presser, et pourtant tout est accompli.`,
    author: `Lao Zi`
  },
  {
    cite: `Apprends comme si tu devais vivre pour toujours et vis comme si tu devais mourir ce soir !`,
    author: `Proverbe tib\xE9tain`,
    tags: ["proverbe"]
  },
  {
    cite: `Si tu veux \xEAtre heureux, sois-le.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `Le grand inconv\xE9nient des livres nouveaux est de nous emp\xEAcher de lire les anciens.`,
    author: `Joseph Joubert`
  },
  {
    cite: `On ne doit pas juger du m\xE9rite d'un homme par ses grandes qualit\xE9s, mais par l'usage qu'il en sait faire.`,
    author: `Jean de La Bruy\xE8re`
  },
  {
    cite: `J'ai d\xE9cid\xE9 d'\xEAtre heureux, c'est meilleur pour la sant\xE9.`,
    author: `Voltaire`
  },
  {
    cite: `Un instant de bonheur vaut mille ans dans l'histoire.`,
    author: `Voltaire`
  },
  {
    cite: `Toute beaut\xE9 est une joie \xE9ternelle.`,
    author: `John Keats`
  },
  {
    cite: `J'ai toujours pr\xE9f\xE9r\xE9 la folie des passions \xE0 la sagesse de l'indiff\xE9rence.`,
    author: `Anatole France`
  },
  {
    cite: `Une joie partag\xE9e est une double joie, un chagrin partag\xE9 est un demi-chagrin.`,
    author: `Jacques Deval`
  },
  {
    cite: `Un seul \xEAtre vous manque et tout est d\xE9peupl\xE9.`,
    author: `Alphonse de Lamartine`
  },
  {
    cite: `Si votre coeur est une rose, votre bouche dira des mots parfum\xE9s.`,
    author: `Proverbe russe`,
    tags: ["proverbe"]
  },
  {
    cite: `Ce que l'on con\xE7oit bien s'\xE9nonce clairement, et les mots pour le dire arrivent ais\xE9ment.`,
    author: `Nicolas Boileau`
  },
  {
    cite: `Ann\xE9es de cerises rouges met le rire sur les bouches.`,
    author: `Proverbe fran\xE7ais`,
    tags: ["proverbe"]
  },
  {
    cite: `Quelle noblesse d'avoir un ami, mais combien plus noble d'\xEAtre un ami.`,
    author: `Richard Wagner`
  },
  {
    cite: `Pour les femmes, la douceur est le meilleur moyen d'avoir raison.`,
    author: `Madame de Maintenon`
  },
  {
    cite: `La perfection est un chemin, non une fin.`,
    author: `Proverbe cor\xE9en`,
    tags: ["proverbe"]
  },
  {
    cite: `Quiconque a bu une tasse de chocolat r\xE9siste \xE0 une journ\xE9e de voyage.`,
    author: `Johann Wolfgang Von Goethe`
  },
  {
    cite: `Un des bonheurs de l'amiti\xE9, c'est de savoir \xE0 qui confier un secret.`,
    author: `Alessandro Manzoni`
  },
  {
    cite: `Dis-toi d'abord ce que tu veux \xEAtre, puis fais ce qu'il faut pour le devenir.`,
    author: `Epict\xE8te`
  },
  {
    cite: `L'art est une d\xE9monstration dont la nature est la preuve.`,
    author: `George Sand`
  },
  {
    cite: `L'art d'\xEAtre tant\xF4t tr\xE8s audacieux et tant\xF4t tr\xE8s prudent est l'art de r\xE9ussir.`,
    author: `Napol\xE9on Bonaparte`
  },
  {
    cite: `L\u2019amour, c\u2019est la fusion, l\u2019identification de deux \xEAtres qui s\u2019admirent et s\u2019adorent l\u2019un l\u2019autre.`,
    author: `George Sand`
  },
  {
    cite: `L'art de l'\xE9crivain consiste surtout \xE0 nous faire oublier qu'il emploie des mots.`,
    author: `Henri Bergson`
  },
  {
    cite: `Le d\xE9sordre est simplement l'ordre que nous ne cherchons pas.`,
    author: `Henri Bergson`
  },
  {
    cite: `Le style est comme le cristal, sa puret\xE9 fait son \xE9clat.`,
    author: `Victor Hugo`
  },
  {
    cite: `L'homme devrait mettre autant d'ardeur \xE0 simplifier sa vie qu'il en met \xE0 la compliquer.`,
    author: `Henri Bergson`
  },
  {
    cite: `Il faut agir en homme de pens\xE9e et penser en homme d'action.`,
    author: `Henri Bergson`
  },
  {
    cite: `R\xEAver c'est se d\xE9sint\xE9resser.`,
    author: `Henri Bergson`
  },
  {
    cite: `Quoi que tu r\xEAves d'entreprendre, commence-le. L'audace a du g\xE9nie, du pouvoir, de la magie.`,
    author: `Johann Wolfgang Von Goethe`
  },
  {
    cite: `En mati\xE8re de sentiment, le manque de logique est la meilleure preuve de la sinc\xE9rit\xE9.`,
    author: `L\xE9on Tolsto\xEF`
  },
  {
    cite: `Le d\xE9faut de l'\xE9galit\xE9, c'est que nous ne la voulons qu'avec nos sup\xE9rieurs.`,
    author: `Henri Becque`
  },
  {
    cite: `Papillon, ce billet doux pli\xE9 cherche une adresse de fleur.`,
    author: `Jules Renard`
  },
  {
    cite: `Si vous voulez que vos r\xEAves se r\xE9alisent, ne dormez pas.`,
    author: `Proverbe juif`,
    tags: ["proverbe"]
  },
  {
    cite: `Si les cieux pleurent, la terre vivra.`,
    author: `Proverbe hawaiien`,
    tags: ["proverbe"]
  },
  {
    cite: `Les r\xEAves d'un chat sont peupl\xE9s de souris.`,
    author: `Proverbe libanais`,
    tags: ["proverbe"]
  },
  {
    cite: `Nul n'est plus chanceux que celui qui croit \xE0 sa chance.`,
    author: `Proverbe allemand`,
    tags: ["proverbe"]
  },
  {
    cite: `On peut aussi b\xE2tir quelque chose de beau avec les pierres qui entravent le chemin.`,
    author: `Johann Wolfgang Von Goethe`
  },
  {
    cite: `Tout ce que tu feras sera d\xE9risoire, mais il est essentiel que tu le fasses.`,
    author: `Gandhi`
  },
  {
    cite: `La rose n'a d'\xE9pines que pour celui qui veut la cueillir.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `Chaque homme cache en lui un enfant qui veut jouer..`,
    author: `Friederich Nietzsche`
  },
  {
    cite: `Pour savoir o\xF9 l'on va, il faut savoir o\xF9 l'on est.`,
    author: `Proverbe tchadien`,
    tags: ["proverbe"]
  },
  {
    cite: `Sans la musique, la vie serait une erreur.`,
    author: `Friederich Nietzsche`
  },
  {
    cite: `A No\xEBl, amusons-nous, profitons-en, car No\xEBl ce n'est qu'une fois par an.`,
    author: `Thomas Tusser`
  },
  {
    cite: `Un homme sans culture, tel un chat sans moustaches, se sent perdu.`,
    author: `Anonyme`
  },
  {
    cite: `La science d\xE9crit la nature, la po\xE9sie la peint et l'embellit.`,
    author: `Georges-Louis Leclerc de Buffon`
  },
  {
    cite: `Si on ne cultive pas le bonheur comment voulez vous qu'il pousse ?`,
    author: `Po\xE8te inconnu`
  },
  {
    cite: `Une fleur fane m\xEAme si on l'aime ; une mauvaise herbe cro\xEEt m\xEAme si on ne l'aime pas.`,
    author: `D\xF6gen`
  },
  {
    cite: `Quand tu lances la fl\xE8che de la v\xE9rit\xE9, trempe toujours la pointe dans du miel.`,
    author: `Proverbe arabe`,
    tags: ["proverbe"]
  },
  {
    cite: `L'esp\xE9rance d'une joie est presque \xE9gale \xE0 la joie.`,
    author: `William Shakespeare`
  },
  {
    cite: `Qui donne ne doit jamais s'en souvenir. Qui re\xE7oit ne doit jamais oublier.`,
    author: `Proverbe h\xE9breu`,
    tags: ["proverbe"]
  },
  {
    cite: `Une fois la partie termin\xE9e, le roi et le pion retournent dans la m\xEAme bo\xEEte.`,
    author: `Proverbe italien`,
    tags: ["proverbe"]
  },
  {
    cite: `Bien \xEAtre : \xE9tat d'esprit produit par la contemplation des ennuis d'autrui.`,
    author: `Ambrose Bierce`
  },
  {
    cite: `La vie, ce n'est pas d'attendre que l'orage passe, c'est d'apprendre \xE0 danser sous la pluie.`,
    author: `S\xE9n\xE8que`
  },
  {
    cite: `L'humour est une disposition d'esprit qui fait qu'on exprime avec gravit\xE9 des choses frivoles et avec l\xE9g\xE8ret\xE9 des choses s\xE9rieuses.`,
    author: `Afred Capus`
  },
  {
    cite: `Accepter l'id\xE9e d'une d\xE9faite, c'est \xEAtre vaincu.`,
    author: `Mar\xE9chal Foch`
  },
  {
    cite: `Le but n'est pas toujours plac\xE9 pour \xEAtre atteint, mais pour servir de point de mire.`,
    author: `Joseph Joubert`
  },
  {
    cite: `Si on veut conna\xEEtre un peuple, il faut \xE9couter sa musique.`,
    author: `Platon`
  },
  {
    cite: `On peut peindre une fleur, mais pas son odeur.`,
    author: `Proverbe italien`,
    tags: ["proverbe"]
  },
  {
    cite: `Parmi les cinq sens, la vue, l'ou\xEFe et l'odorat connaissent moins d'interdits que le toucher et le go\xFBt.`,
    author: `L\xE9onard de Vinci`
  },
  {
    cite: `On n'a jamais fait de grande d\xE9couverte sans hypoth\xE8se audacieuse.`,
    author: `L\xE9onard de Vinci`
  },
  {
    cite: `L'exp\xE9rience prouve que celui qui n'a jamais confiance en personne ne sera jamais d\xE9\xE7u.`,
    author: `L\xE9onard de Vinci`
  },
  {
    cite: `L'attention de celui qui \xE9coute sert d'accompagnement dans la musique du discours.`,
    author: `Joseph Joubert`
  },
  {
    cite: `L'homme n'a point de port, le temps n'a pas de rive ; Il coule et nous passons !`,
    author: `Alphonse de Lamartine`
  },
  {
    cite: `On se sert des couleurs, mais on peint avec le sentiment.`,
    author: `Jean Chardin`
  },
  {
    cite: `Si on ne peut pas rire au paradis, je ne tiens pas \xE0 y aller.`,
    author: `Martin Luther`
  },
  {
    cite: `L'amour n'est pas seulement un sentiment, il est un art aussi.`,
    author: `Honor\xE9 de Balzac`
  },
  {
    cite: `Un homme sans culture, c'est comme un z\xE8bre sans rayure. C'est un \xE2ne.`,
    author: `Proverbe africain`,
    tags: ["proverbe"]
  },
  {
    cite: `Nous pesons rarement dans la m\xEAme balance des offenses que nous faisons et les offenses que l'on nous fait.`,
    author: `Esope`
  },
  {
    cite: `Il faut toujours se r\xE9server le droit de rire le lendemain de ses id\xE9es de la veille.`,
    author: `Napol\xE9on Bonaparte`
  },
  {
    cite: `Le cri du sentiment est toujours absurde ; mais il est sublime parce qu'il est absurde.`,
    author: `Charles Baudelaire`
  },
  {
    cite: `Lorsque les hommes travaillent ensemble, les montagnes se changent en or.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `Il faut toujours bien faire ce qu'on fait, m\xEAme une folie.`,
    author: `Honor\xE9 de Balzac`
  },
  {
    cite: `Sourire trois fois par tous les jours rend inutile tout m\xE9dicament.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `Le sourire est le m\xEAme dans toutes les langues.`,
    author: `Proverbe mexicain`,
    tags: ["proverbe"]
  },
  {
    cite: `Tout portrait qu'on peint avec \xE2me est un portrait, non du mod\xE8le, mais de l'artiste.`,
    author: `Oscar Wilde`
  },
  {
    cite: `C'est par l'adresse que vaut le b\xFBcheron, bien plus que par la force.`,
    author: `Hom\xE8re`
  },
  {
    cite: `La plus perdue de toutes les journ\xE9es est celle o\xF9 l'on a pas ri.`,
    author: `Nicolas de Chamfort`
  },
  {
    cite: `Nous tissons notre destin, nous le tirons de nous comme l'araign\xE9e de la toile.`,
    author: `Fran\xE7ois Mauriac`
  },
  {
    cite: `Il faut faire le sacrifice de ses pr\xE9f\xE9rences mais pas celui de ses convictions.`,
    author: `Ren\xE9 Bazin`
  },
  {
    cite: `La musique commence l\xE0 o\xF9 s'arr\xEAte le pouvoir des mots.`,
    author: `Richard Wagner`
  },
  {
    cite: `La joie n'est pas dans les choses, elle est en nous.`,
    author: `Richard Wagner`
  },
  {
    cite: `Toute ascension vers un endroit merveilleux se fait par un escalier en spirale.`,
    author: `Fran\xE7ois Bacon`
  },
  {
    cite: `La nature fait les hommes semblables, la vie les rend diff\xE9rents.`,
    author: `Confucius`
  },
  {
    cite: `Une heure de conversation vaut mieux que cinquante lettres.`,
    author: `Madame de S\xE9vign\xE9`
  },
  {
    cite: `Sabot qui brille n'est pas toujours celui qui chausse le mieux.`,
    author: `Proverbe fran\xE7ais`,
    tags: ["proverbe"]
  },
  {
    cite: `Ce qui est ha\xEFssable, ne le fait pas \xE0 ton prochain ; c'est l\xE0 toute la loi. Le reste n'est que commentaire.`,
    author: `Rabi Hillel`
  },
  {
    cite: `Un rire sinc\xE8re est un rayon de soleil dans une maison.`,
    author: `William Thackeray`
  },
  {
    cite: `Le bonheur c'est un regard, un mot, un sourire pour ceux qui s'aiment.`,
    author: `Delphine de Girardin`
  },
  {
    cite: `Nous sommes plus curieux du sens des r\xEAves que des choses que nous voyons \xE9veill\xE9s.`,
    author: `Diog\xE8ne`
  },
  {
    cite: `Je ne te dis pas que tu es un bon \xE0 rien, je te dis que tu es mauvais en tout !`,
    author: `Le schpountz`
  },
  {
    cite: `Trouver n'est rien, c'est le plan qui est difficile.`,
    author: `Fiodor Dosto\xEFevski`
  },
  {
    cite: `Le monde ne mourra jamais par manque de merveilles mais uniquement par manque d'\xE9merveillement.`,
    author: `Gilbert Keith Chersterton`
  },
  {
    cite: `La modestie est le meilleur app\xE2t pour aller \xE0 la p\xEAche aux compliments.`,
    author: `Gilbert Keith Chersterton`
  },
  {
    cite: `Une civilisation me parait se d\xE9finir \xE0 la fois pas des questions qu'elle pose et par celles qu'elle ne pose pas.`,
    author: `Andr\xE9 Malraux`
  },
  {
    cite: `Si vous voulez que la vie vous sourit, apportez-lui d'abord votre bonne humeur.`,
    author: `Spinoza`
  },
  {
    cite: `Tant de mains pour transformer ce monde, et si peu de regards pour le contempler !`,
    author: `Julien Gracq`
  },
  {
    cite: `Trois bougies repoussent les t\xE9n\xE8bres ; la v\xE9rit\xE9, la connaissance et les lois de la nature.`,
    author: `Proverbe celtique`,
    tags: ["proverbe"]
  },
  {
    cite: `Aimez les yeux ouverts.`,
    author: `Jorge Bucay`,
    tags: ["extrait"]
  },
  {
    cite: `La beaut\xE9 des choses existe dans l'esprit de celui qui les contemple.`,
    author: `David Hume`
  },
  {
    cite: `Lire, c'est voyager ; voyager, c'est lire.`,
    author: `Victor Hugo`
  },
  {
    cite: `Le bonheur n'est pas la destination, mais la mani\xE8re de voyager.`,
    author: `Proverbe br\xE9silien`,
    tags: ["proverbe"]
  },
  {
    cite: `Un roman, c'est un miroir qu'on prom\xE8ne le long du chemin.`,
    author: `Stendhal`
  },
  {
    cite: `Le bonheur arrive \xE0 ceux qui rient.`,
    author: `Proverbe japonais`,
    tags: ["proverbe"]
  },
  {
    cite: `Le bonheur est une chose qui se multiplie quand il se divise.`,
    author: `Proverbe br\xE9silien`,
    tags: ["proverbe"]
  },
  {
    cite: `Il n'est pas de plus lourd fardeau que d'avoir trop de d\xE9sirs.`,
    author: `Lao Zi`
  },
  {
    cite: `Le plaisir de l'habitude est souvent plus doux encore que celui de la nouveaut\xE9.`,
    author: `Marcel Proust`
  },
  {
    cite: `La nuit n'est peut-\xEAtre que la paupi\xE8re du jour.`,
    author: `Omar Khayy\xE2m`
  },
  {
    cite: `La patience est l'art d'esp\xE9rer.`,
    author: `Luc de Vauvenargues`
  },
  {
    cite: `Le bonheur, c'est de continuer \xE0 d\xE9sirer ce qu'on poss\xE8de.`,
    author: `Friederich Nietzsche`
  },
  {
    cite: `Le parfait bonheur ne consiste qu'\xE0 rendre les hommes heureux.`,
    author: `Jean-Baptiste Rousseau`
  },
  {
    cite: `Le soir de la vie apporte avec soi sa lampe.`,
    author: `Joseph Joubert`
  },
  {
    cite: `Les grandes choses peuvent se manifester par de petit signes.`,
    author: `Sigmund Freud`
  },
  {
    cite: `Il n'y a point de chemin vers le bonheur, le bonheur est le chemin.`,
    author: `Lao Tseu`
  },
  {
    cite: `Le bonheur est un r\xEAve d'enfant r\xE9alis\xE9 \xE0 l'\xE2ge adulte.`,
    author: `Sigmund Freud`
  },
  {
    cite: `Fais ton bonheur par le bonheur d'autrui.`,
    author: `Voltaire`
  },
  {
    cite: `Le bonheur est en m\xEAme temps ce qu'il y a de meilleur, de plus beau et de plus agr\xE9able.`,
    author: `Aristote`
  },
  {
    cite: `Il ne faut pas dire oui avec la bouche et non avec le coeur.`,
    author: `Lao Tseu`
  },
  {
    cite: `Ne fais rien dans ta vie, qui te fasse redouter que ton voisin en prenne connaissance.`,
    author: `Epicure`
  },
  {
    cite: `Qu'on me donne six heures pour couper un arbre, j'en passerai quatre \xE0 pr\xE9parer ma hache.`,
    author: `Abraham Lincoln`
  },
  {
    cite: `On met plus de passion \xE0 obtenir ce qu'on n'a pas qu'\xE0 conserver ce qu'on a.`,
    author: `Stendhal`
  },
  {
    cite: `Notre plus grande gloire n'est pas de ne jamais tomber, mais de nous relever chaque fois.`,
    author: `Confucius`
  },
  {
    cite: `Les cons\xE9quences de la col\xE8re sont beaucoup plus graves que les causes.`,
    author: `Marc Aur\xE8le`
  },
  {
    cite: `Chaque coup de col\xE8re est un coup de vieux, chaque sourire est un coup de jeune.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `La d\xE9couverte d'un mets nouveau fait plus pour le bonheur du genre humain que la d\xE9couverte d'une \xE9toile.`,
    author: `Jean Anthelme Brillat-Savarin`
  },
  {
    cite: `La science est le savoir organis\xE9. La sagesse est la vie organis\xE9e.`,
    author: `Emmanuel Kant`
  },
  {
    cite: `Si je r\xEAve tout seul, cela reste un r\xEAve. Si nous r\xEAvons ensemble, c'est le d\xE9but de la r\xE9alit\xE9.`,
    author: `Proverbe persan`,
    tags: ["pens\xE9e positive", "proverbe"]
  },
  {
    cite: `Il n'est pas de joie qui \xE9gale celle de se cr\xE9er de nouvelles amiti\xE9s.`,
    author: `Proverbe chinois`,
    tags: ["pens\xE9e positive", "proverbe"]
  },
  {
    cite: `L'\xE9chec est seulement l'opportunit\xE9 de recommencer d'une fa\xE7on plus intelligente.`,
    author: `Henry Ford`
  },
  {
    cite: `N'attendez pas d'\xEAtre heureux pour sourire. Souriez plut\xF4t afin d'\xEAtre heureux.`,
    author: `Edward L. Kramer`
  },
  {
    cite: `Cherche un arbre et laisse-lui t'apprendre le calme.`,
    author: `Eckhart Tolle`
  },
  {
    cite: `S'\xE9loigner de tout rapproche un peu de l'essentiel.`,
    author: `Lo\xEFc Peyron`
  },
  {
    cite: `Ceux qui r\xEAvent \xE9veill\xE9s ont connaissance de mille choses \xE9chappent \xE0 ceux qui ne r\xEAvent qu'endormis.`,
    author: `Edgar Allan Poe`
  },
  {
    cite: `Qui m'aime me suive, disait le vent.`,
    author: `Sylvain Tesson`
  },
  {
    cite: `Ignore toutes les choses qui t'emp\xEAchent d'avancer, en particulier celles qui sont dans ta t\xEAte.`,
    author: `Meryl Streep`
  },
  {
    cite: `La vie seule ne suffit pas. On a aussi besoin d'un rayon de soleil, de libert\xE9 et d'une petite fleur.`,
    author: `Hans Christian Andersen`
  },
  {
    cite: `Les deux jours les plus importants de votre vie sont le jour o\xF9 vous \xEAtes n\xE9 et le jour o\xF9 vous d\xE9couvrez pourquoi.`,
    author: `Mark Twain`
  },
  {
    cite: `Le bonheur est souvent la seule chose que l'on puisse donner sans l'avoir, et c'est en le donnant qu'on l'acquiert.`,
    author: `Voltaire`
  },
  {
    cite: `La vie, c'est un livre qu'on aime, c'est un enfant qui joue \xE0 vos pieds, un outil qu'on tient bien dans sa main, un banc pour se reposer le soir devant sa maison.`,
    author: `Jean Anouilh`,
    tags: ["extrait", "Antigone"]
  },
  {
    cite: `Je suis ma propre muse.`,
    author: `Frida Kahlo`
  },
  {
    cite: `\xCAtre heureux ne signifie pas que tout est parfait. Cela signifie que vous avez d\xE9cid\xE9 de regarder au-del\xE0 des imperfections.`,
    author: `Aristote`
  },
  {
    cite: `Seule, je ne peux pas changer le monde, mais je peux jeter une pierre dans l'eau et cr\xE9er de nombreuses ondulations.`,
    author: `M\xE8re Teresa`
  },
  {
    cite: `Tout ce que les hommes ont fait de beau et de bien, ils l'ont fait avec leurs r\xEAves.`,
    author: `Bernard Moitessier`
  },
  {
    cite: `Nous n'avons pas besoin de magie pour changer le monde. Nous portons d\xE9j\xE0 tout le pouvoir dont nous avons besoin \xE0 l'int\xE9rieur de nous.`,
    author: `J. K. Rowling`,
    tags: ["bien-\xEAtre"]
  },
  {
    cite: `Un seul moment de joie chasse cent moments de tristesse.`,
    author: `Proverbe chinois`,
    tags: ["proverbe", "joie"]
  },
  {
    cite: `N'oubliez pas que la terre se r\xE9jouit de sentir vos pieds nus et que les vents joueraient volontiers avec vos cheveux.`,
    author: `Khalil Gibran`
  },
  {
    cite: `Il n'y a pas de honte \xE0 pr\xE9f\xE9rer le bonheur.`,
    author: `Albert Camus`
  },
  {
    cite: `Il n'est jamais trop tard pour devenir ce que l'on aurait pu \xEAtre.`,
    author: `George Eliot`
  },
  {
    cite: `Va prendre tes le\xE7ons dans la nature.`,
    author: `L\xE9onard de Vinci`
  },
  {
    cite: `Le meilleur moment pour planter un arbre, c'\xE9tait il y a vingt ans. Le second, c'est maintenant.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `Je ne peux rester sans rien faire...  Je vais faire la sieste.`,
    author: `Yvan Audouard`
  },
  {
    cite: `La vie n'est pas faite pour se trouver ; la vie est faite pour se cr\xE9er.`,
    author: `George Bernard Shaw`
  },
  {
    cite: `On voit mourir toute chose anim\xE9e lorsque du corps l'\xE2me subtile part. Je suis le corps, toi la meilleure part: O\xF9 es-tu donc, \xF6 \xE2me bien-aim\xE9e ?`,
    author: `Louise Lab\xE9`,
    tags: ["extrait", "Sonnet VII"]
  },
  {
    cite: `Dans la vie. Rien n'est \xE0 craindre. Tout est \xE0 comprendre.`,
    author: `Marie Curie`
  },
  {
    cite: `Rien n'est jamais fini. Il suffit d'un peu de bonheur pour que tout recommence.`,
    author: `Emile Zola`,
    tags: ["extrait", "Germinal"]
  },
  {
    cite: `Entourez-vous de choses qui vous rendent vraiment heureux.`,
    author: `Marie Kondo`
  },
  {
    cite: `Il se faut s'entraider c'est la loi de nature.`,
    author: `Jean de La Fontaine`
  },
  {
    cite: `Apr\xE8s le verbe aimer, aider est le plus beau verbe du monde.`,
    author: `Baronne Berthe Von Suttner`
  },
  {
    cite: `La curiosit\xE9 est une gourmandise: voir, c'est d\xE9vorer.`,
    author: `Victor Hugo`
  },
  {
    cite: `La vie est un d\xE9fi \xE0 relever, un bonheur \xE0 m\xE9riter, une aventure \xE0 tenter.`,
    author: `M\xE8re Teresa`
  },
  {
    cite: `Quelle musique, le silence !`,
    author: `Jean Anouilh`
  },
  {
    cite: `Le temps est notre ami.`,
    author: `Christine Cayol`
  },
  {
    cite: `Sans effort d'imagination, ou de r\xEAves, nous perdons l'excitation des possibilit\xE9s. Apr\xE8s tout, r\xEAver est une sorte de planification.`,
    author: `Gloria Steinen`
  },
  {
    cite: `Je souhaite dans ma maison, Une femme ayant sa raison, Un chat passant parmi les livres, Des amis en toute saison Sans lesquels je ne peux pas vivre.`,
    author: `Guillaume Apollinaire`
  },
  {
    cite: `Gr\xE2ce aux r\xEAves le monde a \xE9t\xE9 r\xE9invent\xE9 plus souvent qu'il n'y a d'\xE9toiles dans le ciel.`,
    author: `Lloyd Jones`
  },
  {
    cite: `Ne garde rien de ce qui t'a fait tant de mal, les lettres, les photos, les listes dee courses, les partitions, les marque-pages. Ne garde rien, ne jette rien non plus, fais-en cadeau \xE0 quelqu'un qui trouvera \xE7a beau.`,
    author: `C\xE9cile Coulon`,
    tags: ["extrait", "Les Ronces"]
  },
  {
    cite: `Ne laissez personne vous voler votre imagination, votre cr\xE9ativit\xE9 ou votre curiosit\xE9. C'est votre place dans le monde, c'est votre vie.`,
    author: `Mae C. Jemison`
  },
  {
    cite: `Si tu n'arrives pas \xE0 penser, marche ; Si tu penses trop, marche ; Si tu penses mal, marche encore.`,
    author: `Jean Giono`
  },
  {
    cite: `Le ciel \xE9toil\xE9 offre une le\xE7on de sagesse \xE0 qui sait le regarder: s'y perdre. C'est se trouver.`,
    author: `Michel Onfray`
  },
  {
    cite: `Ne renoncez pas \xE0 faire ce que vous voulez vraiment faire. L\xE0 o\xF9 il y a des r\xEAves, de l'amour et de l'inspiration, vous ne pourrez pas vous tromper.`,
    author: `Ella Fitzgerald`
  },
  {
    cite: `Le succ\xE8s est de vous aimer, d'aimer ce que vous faites et d'aimer la fa\xE7on dont vous le faites.`,
    author: `Maya Angelou`
  },
  {
    cite: `Ne cessez jamais d'\xEAtre fantasque. Et ne donnez jamais \xE0 qui que ce soit la responsabilit\xE9 de votre vie..`,
    author: `Mary Oliver`
  },
  {
    cite: `La joie est en tout, il faut savoir l'extraire.`,
    author: `Mary Oliver`
  },
  {
    cite: `La vie est une grande toile vierge: \xE0 vous d'y ajouter le plus de couleurs possible.`,
    author: `Danny Kaye`
  },
  {
    cite: `Quand je me prom\xE8ne, je sens toujours qu'au coin de la rue. Il y a quelque chose de merveilleux qui m'attend.`,
    author: `Sophia Loren`
  },
  {
    cite: `Le bonheur est un seul bouquet : confus l\xE9ger fondant sucr\xE9.`,
    author: `Paul Eluard`
  },
  {
    cite: `Qui s\xE8me le silence r\xE9colte la paix.`,
    author: `Proverbe tha\xEFlandais`,
    tags: ["proverbe"]
  },
  {
    cite: `La vie a beaucoup plus d'imagination que nous.`,
    author: `Fran\xE7ois Truffaut`
  },
  {
    cite: `Le vrai bonheur serait de se souvenir du pr\xE9sent.`,
    author: `Jules Renard`
  },
  {
    cite: `Les erreurs ne se regrettent pas, elles s'assument. La peur ne se fuit pas, elle se surmonte. L'amour ne se crie pas, il se prouve !`,
    author: `Simone Weil`
  },
  {
    cite: `Il ne faut pas se mettre en col\xE8re contre les choses, cela ne leur fait absolument rien.`,
    author: `Germaine de Sta\xEBl`
  },
  {
    cite: `Le bout du monde est le fond du jardin contiennent la m\xEAme quantit\xE9 de merveilles.`,
    author: `Christian Bobin`
  },
  {
    cite: `Vivre c'est aider un autre \xE0 vivre.`,
    author: `Jacques de Bourbon Busser`
  },
  {
    cite: `La v\xE9ritable amiti\xE9 ne g\xE8le pas en hiver.`,
    author: `Proverbe allemand`,
    tags: ["proverbe"]
  },
  {
    cite: `L'art est le plus beau des mensonges.`,
    author: `Claude Debussy`
  },
  {
    cite: `Ralentissez et tout devient plus beau.`,
    author: `David Lynch`
  },
  {
    cite: `Ecris sur ton coeur que chaque jour est le plus beau jour de l'ann\xE9e.`,
    author: `Ralph Waldo Emerson`
  },
  {
    cite: `Le plus grand \xE9chec est de ne pas avoir le courage d'oser.`,
    author: `Abb\xE9 Pierre`
  },
  {
    cite: `Avant de vous diagnostiquer comme d\xE9pressif ou en \xE9tat de faible estime de vous-m\xEAme, commencez par vous assurer que vous n'\xEAtes juste pas, en fait, entour\xE9 par des trous du cul.`,
    author: `William Gibson`
  },
  {
    cite: `L'app\xE9tit vient en mangeant, la soif disparait en buvant.`,
    author: `Fran\xE7ois Rabelais`
  },
  {
    cite: `Le cr\xE9ateur, en obligeant l'homme \xE0 manger pour vivre, l'y invite par l'app\xE9tit et le r\xE9compense par le plaisir.`,
    author: `Jean Anthelme Brillat-Savarin`
  },
  {
    cite: `La gourmandise commence quand on n'a plus faim.`,
    author: `Alphonse Daudet`
  },
  {
    cite: `Si vous n'\xEAtes pas capable d'un peu de sorcellerie, ce n'est pas la peine de vous m\xEAler de cuisine.`,
    author: `Colette`
  },
  {
    cite: `Bien manger, c'est atteindre le ciel.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `Si je p\xE9tais tout ce que j'ai mang\xE9, je serais sur la lune.`,
    author: `Camille Richard`
  },
  {
    cite: `La joie prolonge la vie.`,
    author: `Ben Sira`
  },
  {
    cite: `La bouche garde le silence pour \xE9couter parler le coeur.`,
    author: `Alfred de Musset`
  },
  {
    cite: `Il n'y a qu'une sorte d'amour, mais il y en a mille diff\xE9rentes copies.`,
    author: `Fran\xE7ois de La Rochefoucauld`
  },
  {
    cite: `La vie est courte, mais un sourire ne prend qu'une seconde.`,
    author: `Proverbe cubain`,
    tags: ["proverbe"]
  },
  {
    cite: `Au milieu de l'hiver, j'ai d\xE9couvert en moi un invincible \xE9t\xE9.`,
    author: `Albert Camus`
  },
  {
    cite: `Le voyage est un retour vers l'essentiel.`,
    author: `Proverbe tib\xE9tain`,
    tags: ["proverbe"]
  },
  {
    cite: `Le bonheur est une petite chose que l'on grignote, assis par terre, au soleil.`,
    author: `Jean Giraudoux`
  },
  {
    cite: `Fais du bien \xE0 ton corps pour que ton \xE2me ait envie d'y rester.`,
    author: `Proverbe indien`,
    tags: ["proverbe"]
  },
  {
    cite: `Le bonheur a les bras ouverts et les yeux ferm\xE9s.`,
    author: `Proverbe allemand`,
    tags: ["proverbe"]
  },
  {
    cite: `H\xE2tons-nous de succomber \xE0 la tentation avant qu'elle ne s'\xE9loigne.`,
    author: `Epicure`
  },
  {
    cite: `Il faut toujours viser la lune, car m\xEAme en cas d'\xE9chec, on atterrit dans les \xE9toiles.`,
    author: `Oscar Wilde`
  },
  {
    cite: `Vivre de telle sorte qu'il te faille d\xE9sirer revivre, c'est l\xE0 ton devoir.`,
    author: `Nietzsche`
  },
  {
    cite: `Les oreilles et les yeux sont les portes et les fen\xEAtres de l'\xE2me.`,
    author: `Joseph Joubert`
  },
  {
    cite: `Quelle flamme pourrait \xE9galer le rayon de soleil d'un jour d'hiver ?`,
    author: `Henry David Thoreau`
  },
  {
    cite: `Grand est celui qui n'a pas perdu son coeur d'enfant.`,
    author: `Meng-Tsen`
  },
  {
    cite: `Je cherche les petites notes qui s'aiment.`,
    author: `Wolfgang Amadeus Mozart`
  },
  {
    cite: `La vrai g\xE9n\xE9rosit\xE9 envers l'avenir consiste \xE0 tout donner au pr\xE9sent.`,
    author: `Albert Camus`,
    tags: ["g\xE9n\xE9rosit\xE9"]
  },
  {
    cite: `L'\xE9t\xE9, un \xE9blouissement comme est la neige, Celle qui vient l\xE9g\xE8re et ne dure pas, et rien de nous n'en trouble la lumi\xE8re D'eau qui s'est condens\xE9e puis s'\xE9vapore.`,
    author: `Yves Bonnefoy`,
    tags: []
  },
  {
    cite: `No\xEBl n'est pas une saison, c'est un sentiment.`,
    author: `Edna Ferber`,
    tags: ["f\xEAte"]
  },
  {
    cite: `No\xEBl est l\xE0, ce joyeux no\xEBl, des cadeaux plein les bras, qui r\xE9chauffe nos coeurs et apporte la joie, jour des plus beaux souvenirs, plus beau jour de l'ann\xE9e.`,
    author: `Washington Irving`,
    tags: ["no\xEBl"]
  },
  {
    cite: `La chose la plus commune, d\xE8s qu'on nous la cache, devient un d\xE9lice.`,
    author: `Oscar Wilde`,
    tags: ["curiosit\xE9"]
  },
  {
    cite: `Le bonheur n'est pas chose ais\xE9e. Il est tr\xE8s difficile de le trouver en nous, il est impossible de le trouver ailleurs.`,
    author: `Bouddha`,
    tags: ["bonheur", "pens\xE9e"]
  },
  {
    cite: `Entre amis, il est si beau que le silence soit d'or, mais le rire bon et frais l'est beaucoup plus encore.`,
    author: `Friederich Nietzsche`,
    tags: ["amiti\xE9"]
  },
  {
    cite: `L'art vise \xE0 imprimer en nous des sentiments plut\xF4t qu'\xE0 les exprimer.`,
    author: `Henri Bergson`,
    tags: ["art"]
  },
  {
    cite: `Les hommes naissent ignorants, pas stupides, la stupidit\xE9 est le r\xE9sultat de l'\xE9ducation.`,
    author: `Bertrand Russell`,
    tags: ["\xE9ducation", "intelligence"]
  },
  {
    cite: `Il n'y a rien d'impossible quand on s'aime.`,
    author: `George Sand`,
    tags: ["amour"]
  },
  {
    cite: `Il n'est pas de joie qui \xE9gale celle de se cr\xE9er de nouvelles amiti\xE9s.`,
    author: `Proverbe japonais`,
    tags: ["proverbe"]
  },
  {
    cite: `Veux-tu vivre heureux ? Voyage avec deux sacs, l'un pour donner, l'autre pour recevoir.`,
    author: `Johann Wolfgang Von Goethe`,
    tags: ["bonheur"]
  },
  {
    cite: `La v\xE9ritable indulgence consiste \xE0 comprendre et \xE0 pardonner les fautes qu'on ne serait pas capable de commettre.`,
    author: `Victor Hugo`,
    tags: ["pardon"]
  },
  {
    cite: `Le plus grand secret pour le bonheur, c'est d'\xEAtre bien avec soi.`,
    author: `Bernard Le Bouyer de Fontenelle`,
    tags: ["bonheur", "bien-\xEAtre"]
  },
  {
    cite: `L'amiti\xE9 double les joies et r\xE9duit de moiti\xE9 les peines.`,
    author: `Francis Bacon`,
    tags: ["amiti\xE9"]
  },
  {
    cite: `Tous les tr\xE9sors de la terre ne valent pas le bonheur d'\xEAtre aim\xE9.`,
    author: `Calderon`,
    tags: ["amour"]
  },
  {
    cite: `Il y a trois sortes de savoir : le savoir proprement dit, le savoir-faire et le savoir-vivre ; les deux derners dispensent assez bien du premier.`,
    author: `Charles Maurice de Talleyrand-P\xE9rigord`,
    tags: []
  },
  {
    cite: `Si vous avez confiance en vous-m\xEAme, vous inspirerez confiance aux autres.`,
    author: `Johann Wolfgang Von Goethe`,
    tags: ["confiance"]
  },
  {
    cite: `Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la m\xEAme direction.`,
    author: `Antoine de Saint-Exup\xE9ry`,
    tags: ["amour"]
  },
  {
    cite: `Il n'y a qu'un chemin possible pour le bonheur, c'est de cesser de nous tracasser pour des choses qui ne d\xE9pendent pas de notre volont\xE9.`,
    author: `Epict\xE8te`,
    tags: ["bonheur"]
  },
  {
    cite: `L\xE0 o\xF9 le coeur est, les pieds n'h\xE9sitent pas \xE0 y aller.`,
    author: `Proverbe togolais`,
    tags: ["proverbe"]
  },
  {
    cite: `Vis comme si tu devais mourir demain, apprends comme si tu devais vivre toujours.`,
    author: `Gandhi`,
    tags: ["motivation"]
  },
  {
    cite: `Le contraire de la mis\xE8re ce n'est pas la richesse. Le contraire de la mis\xE8re, c'est le partage.`,
    author: `Abb\xE9 Pierre`,
    tags: ["partage"]
  },
  {
    cite: `Chaque fois que l'on refuse 1 milliard pour le logement, c'est 10 milliards que l'on pr\xE9pare pour les tribunaux, les prisons, les asiles de fous.`,
    author: `Abb\xE9 Pierre`,
    tags: ["perspective"]
  },
  {
    cite: `La vie est un myst\xE8re qu'il faut vivre, et non un probl\xE8me qu'il faut r\xE9soudre.`,
    author: `Gandhi`,
    tags: []
  },
  {
    cite: `La pens\xE9e n'est qu'un \xE9clair qu milieu de la nuit. Mais c'est un \xE9clair qui est tout.`,
    author: `Henri Pointcar\xE9`,
    tags: []
  },
  {
    cite: `Le bonheur ne vient pas \xE0 ceux qui l'attendent assis.`,
    author: `Baden-Powell`,
    tags: ["bonheur"]
  },
  {
    cite: `Le savant est fier d'avoir tant appris ; le sage est humble d'en savoir si peu.`,
    author: `William Cowper`,
    tags: []
  },
  {
    cite: `Je ne cherche pas \xE0 conna\xEEtre les r\xE9ponses, je cherche \xE0 comprendre les questions.`,
    author: `Confucius`,
    tags: ["savoir"]
  },
  {
    cite: `Rien ne peut r\xE9sister \xE0 l'assaut du rire.`,
    author: `Mark Twain`,
    tags: ["rire"]
  },
  {
    cite: `Celui qui a rendu service doit se taire, c'est \xE0 celui qui l'a re\xE7u de parler.`,
    author: `S\xE9n\xE8que`,
    tags: []
  },
  {
    cite: `Curiosit\xE9 n'est que vanit\xE9. Le plus souvent, on ne veut savoir que pour en parler.`,
    author: `Blaise Pascal`,
    tags: []
  },
  {
    cite: `L'erreur n'annule pas la valeur de l'effort accompli.`,
    author: `Proverbe africain`,
    tags: ["proverbe"]
  },
  {
    cite: `L'art est une d\xE9monstration dont la nature est la preuve.`,
    author: `George Sand`,
    tags: []
  },
  {
    cite: `Le meilleur moyen de teninr sa parole est de ne jamais la donner.`,
    author: `Napol\xE9on Bonaparte`,
    tags: []
  },
  {
    cite: `Les mots me font l'effet d'un pensionnat de petits gar\xE7ons que la phrase m\xE8ne en promenade.`,
    author: `Georges Courteline`,
    tags: ["litt\xE9rature"]
  },
  {
    cite: `Chacun est une lune, avec une face cach\xE9e.`,
    author: `Mark Twain`,
    tags: []
  },
  {
    cite: `Il faut deux ans pour apprendre \xE0 parler et toute une vie pour apprendre \xE0 se taire.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `Deux choses instruisent l'homme de toute sa nature : l'instinct et l'exp\xE9rience.`,
    author: `Blaise Pascal`,
    tags: []
  },
  {
    cite: `La critique est une chose bien commode : on attaque avec un mot, il faut des pages pour se d\xE9fendre.`,
    author: `Jean-Jacques Rousseau`,
    tags: []
  },
  {
    cite: `L'amour n'est pas aveugle, il est aveuglant.`,
    author: `Yvan Audouard`,
    tags: ["amour"]
  },
  {
    cite: `Une lecture amusante est aussi utile \xE0 la sant\xE9 que l'exercice du corps.`,
    author: `Emmanuel Kant`,
    tags: []
  },
  {
    cite: `Touch\xE9 par l'amour, tout homme devient po\xE8te.`,
    author: `Platon`,
    tags: ["amour"]
  },
  {
    cite: `Il n'y a rien de plus triste qu'une vie sans hasard.`,
    author: `Honor\xE9 de Balzac`,
    tags: []
  },
  {
    cite: `La col\xE8re est comme une avalanche qui se brise sur ce qu'elle brise.`,
    author: `S\xE9n\xE8que`,
    tags: []
  },
  {
    cite: `Les merveilles naissent sans qu'on les s\xE8me.`,
    author: `Proverbe proven\xE7al`,
    tags: ["proverbe"]
  },
  {
    cite: `Le silence est un ami qui ne trahit jamais.`,
    author: `Confucius`,
    tags: []
  },
  {
    cite: `Ecrire c'est une fa\xE7on sans \xEAtre interrompu.`,
    author: `Jules Renard`,
    tags: []
  },
  {
    cite: `Je me moque de savoir beaucoup de choses : je veux savoir des choses que j'aime.`,
    author: `Jules Renard`,
    tags: ["connaissance"]
  },
  {
    cite: `C'est No\xEBl dans le coeur qui met No\xEBl dans l'air.`,
    author: `William Thomas Ellis`,
    tags: ["no\xEBl"]
  },
  {
    cite: `Un mois avant, un mois apr\xE8s No\xEBl, le froid est bon et naturel.`,
    author: `Proverbe fran\xE7ais`,
    tags: ["adage", "proverbe", "no\xEBl"]
  },
  {
    cite: `No\xEBl, c'est le printemps de l'esprit ; c'est tout promesse.`,
    author: `Alain`,
    tags: ["no\xEBl", "Emile-Auguste Chartier", "extrait", `Les saisons de l'esprit`]
  },
  {
    cite: `Il ne faut pas chercher \xE0 rajouter des ann\xE9es \xE0 sa vie, mais plut\xF4t essayer de rajouter de la vie \xE0 ses ann\xE9es.`,
    author: `John Fitzgerald Kennedy`,
    tags: ["vie"]
  },
  {
    cite: `Qu'elle soit n\xE9cessaire, ou m\xEAme justifi\xE9e, ne croyez jamais que la guerre n'est pas un crime.`,
    author: `Ernest Hemingway`,
    tags: ["guerre", "crime"]
  },
  {
    cite: `La joie de vivre est une \xE9motion contagieuse.`,
    author: `Edward D. Wynot`,
    tags: ["bonheur"]
  },
  {
    cite: `La beaut\xE9 commence le jour o\xF9 tu d\xE9cides d'\xEAtre toi-m\xEAme.`,
    author: `Coco Chanel`,
    tags: []
  },
  {
    cite: `Quand la vie te donne un lundi, plonge-le dans les paillettes et scintille toue la journ\xE9e.`,
    author: `Ella Woodward`,
    tags: ["bonheur", "difficult\xE9e"]
  },
  {
    cite: `Sors des sentiers battus. Explore. R\xEAve. D\xE9couvre.`,
    author: `Mark Twain`,
    tags: []
  },
  {
    cite: `Je ne veux d\xE9sormais collectionner que les moments de bonheur.`,
    author: `Stendhal`,
    tags: ["bonheur"]
  },
  {
    cite: `Soyez vous-m\xEAme, les autres sont d\xE9j\xE0 pris.`,
    author: `Oscar Wilde`,
    tags: []
  },
  {
    cite: `Je ne perds jamais, soit je gagne, soit j'apprends.`,
    author: `Nelson Mandela`,
    tags: []
  },
  {
    cite: `Fais de ta vie un r\xEAve, et d'un r\xEAve une r\xE9alit\xE9.`,
    author: `Antoinde de Saint-Exup\xE9ry`,
    tags: ["R\xEAve"]
  },
  {
    cite: `Il n'y a rien de mieux qu'un ami. Sauf peut-\xEAtre un ami avec du chocolat.`,
    author: `Lynda Grayson`,
    tags: ["amiti\xE9"]
  },
  {
    cite: `Je peux le faire et le ferai. Vous pouvez commencer \xE0 regarder.`,
    author: `Carry Green`,
    tags: []
  },
  {
    cite: `"C'est impossible" di la fiert\xE9. "C'est risqu\xE9" dit l'exp\xE9rience. "C'est sans issue" dit la raison."Essayons" mlurmure le coeur.`,
    author: `William Arthur Ward`,
    tags: []
  },
  {
    cite: `La vie, c'est comme une bo\xEEte de chocolats, on ne sait jamais sur quoi on va tomber.`,
    author: `Winston groom`,
    tags: ["extrait", "Forrest Gump"]
  },
  {
    cite: `Donne \xE0 chaque jour la chance de devenir le plus beau jour de ta vie.`,
    author: `Makr Twain`,
    tags: ["bonheur"]
  },
  {
    cite: `Tous les enfants ont du g\xE9nie, le tout c'est de le faire appara\xEEtre.`,
    author: `Charlie Chaplin`,
    tags: ["enfance"]
  },
  {
    cite: `La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'\xE9quilibre.`,
    author: `Albert Einstein`,
    tags: []
  },
  {
    cite: `Il ne faut pas attendre d'\xEAtre parfait pour commencer quelque chose de bien.`,
    author: `Abb\xE9 Pierre`,
    tags: []
  },
  {
    cite: `J'ai un petit c\xF4t\xE9 sir\xE8ne. Certains jours, on dirait que je me suis peign\xE9e avec une fourchette.`,
    author: `Emmanuelle Cortes`,
    tags: []
  },
  {
    cite: `Il n'y a aucune limite \xE0 ce que nous pouvons accomplir en tant que filles.`,
    author: `Michelle Obama`,
    tags: ["f\xE9minisme"]
  },
  {
    cite: `Il y a deux choses qui changent notre vie : les gens que nous rencontrons et les livres que nous lisons.`,
    author: `Harvey MacKay`,
    tags: []
  },
  {
    cite: `Une journ\xE9e sans rire est une journ\xE9e de perdue.`,
    author: `Charlie Chaplin`,
    tags: ["rire", "bonheur"]
  },
  {
    cite: `N'oublions pas : un livre, un stylo, un enfant et un enseignant peuvent changer le monde.`,
    author: `Malala Yousazai`,
    tags: []
  },
  {
    cite: `Don't worry, be happy.`,
    author: `Bob Marley`,
    tags: ["Chanson"]
  },
  {
    cite: `I have a dream.`,
    author: `Martin Luther King`,
    tags: []
  },
  {
    cite: `Neuf personnes sur dix aiment le chocolat ; la dixi\xE8me ment.`,
    author: `John G. Tullius`,
    tags: []
  },
  {
    cite: `Mais alors, si le monde n'a absolument aucun sens, qu'est ce qui nous emp\xEAche d'en inventer un ?.`,
    author: `Lewis Caroll`,
    tags: []
  },
  {
    cite: `Le bonheur vient vers ceux qui croient en lui.`,
    author: `Ali Obn Abu Talib`,
    tags: ["bonheur"]
  },
  {
    cite: `Pour \xEAtre irrempla\xE7able, il faut \xEAtre diff\xE9rente.`,
    author: `Coco Chanel`,
    tags: []
  },
  {
    cite: `\xCAtre en vacances, c'est n'avoir rien \xE0 faire et avoir toute la journ\xE9e pour le faire.`,
    author: `Robert Orban`,
    tags: ["vacance", "oisivet\xE9"]
  },
  {
    cite: `On n'a jamais autant besoin de vacances que lorsqu'on en revient.`,
    author: `Ann Landers`,
    tags: ["fatigue"]
  },
  {
    cite: `Celui qui dit que le bonheur ne s'ach\xE8te pas \xE0 oubli\xE9 qu'il y a les petits chiots.`,
    author: `Gene Hill`,
    tags: ["bonheur", "capitalisme"]
  },
  {
    cite: `Le secret du bonheuret le comble de l'art, c'est de vivre comme tout le monde, en n'\xE9tant comme personne.`,
    author: `Simone de Beauvoir`,
    tags: []
  },
  {
    cite: `La fin d'une chose marque le commencement d'une nouvelle.`,
    author: `Antoine de Saint-Exup\xE9ry`,
    tags: []
  },
  {
    cite: `La musique donne une \xE2me \xE0 nos coeurs et des ailes \xE0 la pens\xE9e.`,
    author: `Platon`,
    tags: []
  },
  {
    cite: `Un sourire co\xFBte moins cher que l'\xE9lectricit\xE9, mais donne autant de lumi\xE8re.`,
    author: `Abb\xE9 Pierre`,
    tags: []
  },
  {
    cite: `Les grandes choses peuvent se manifester par de petits signes.`,
    author: `Freud`,
    tags: []
  },
  {
    cite: `Aimer une personne pour son apparence, c'est comme aimer un livre pour sa reliure.`,
    author: `Laure Conan`,
    tags: ["amour"]
  },
  {
    cite: `Si nous voulons nous pardonner les uns aux autres, commen\xE7ons d'abord par nous comprendre les uns les autres.`,
    author: `Emma Goldman`,
    tags: ["pardon"]
  },
  {
    cite: `Ceux qui ne bougent pas, ne remarquent pas leur cha\xEEnes.`,
    author: `Rosa Luxembourg`,
    tags: ["libert\xE9"]
  },
  {
    cite: `La r\xE9volution sera la floraison de l'humanit\xE9 comme l'amour est la floraison du coeur.`,
    author: `Louise Michel`,
    tags: ["amour", "libert\xE9"]
  },
  {
    cite: `Ne jamais se laisser abattre par des personnes ou par des \xE9v\xE9nements.`,
    author: `Marie Curie`,
    tags: []
  },
  {
    cite: `Si nous faisions tout ce que nous sommes capables de faire, nous en serions abasourdis.`,
    author: `Thomas Edison`,
    tags: []
  },
  {
    cite: `Si ta volont\xE9 te l\xE2che, d\xE9passe-la !.`,
    author: `Emily Dickinson`,
    tags: ["ostination"]
  },
  {
    cite: `Que cette ann\xE9e vous soit heureuse ; que la paix, le repos et la sant\xE9 vous tiennent lieu de fortune.`,
    author: `Madame de S\xE9vign\xE9`,
    tags: []
  },
  {
    cite: `Le v\xE9ritable amour ne conna\xEEt ni le soup\xE7on ni la m\xE9fiance.`,
    author: `George Sand`,
    tags: ["amour"]
  },
  {
    cite: `Un des bonheurs de l'amiti\xE9 c'est d'avoir \xE0 qui confier un secret.`,
    author: `Alessandro Mansoni`,
    tags: ["amiti\xE9"]
  },
  {
    cite: `Le bonheur tient dans la main, il suffit d'un tout petit rien, mais beaucoup de coeur pour qu'il sonne l'heure.`,
    author: `Josiane Coeijmans`,
    tags: ["bonheur"]
  },
  {
    cite: `Tout s'arrange sous l'influence d'une pens\xE9e heureuse et optimiste.`,
    author: `George Sand`,
    tags: []
  },
  {
    cite: `Le courage est le prix que la vie exige pour accorder la paix.`,
    author: `Amelia Earhart`,
    tags: ["courage"]
  },
  {
    cite: `Impossible de bien r\xE9fl\xE9chir, de bien aimer, de bien dormir si on n'a pas mang\xE9.`,
    author: `Virginia Woolf`,
    tags: ["nourriture"]
  },
  {
    cite: `Chacun rec\xE8le en lui une for\xEAt vierge, une \xE9tendue de neige o\xF9 nul oiseau n'a laiss\xE9 son empreinte.`,
    author: `Virginia Woolf`,
    tags: []
  },
  {
    cite: `Ma devise - sans limites.`,
    author: `Isadora Duncan`,
    tags: []
  },
  {
    cite: `Forte comme un homme, plus forte que la plupart d'entre eux.`,
    author: `Lozen`,
    tags: ["f\xE9minisme"]
  },
  {
    cite: `L'amour a d'autres yeux que le commun des hommes.`,
    author: `Jean Racine`,
    tags: ["amour"]
  },
  {
    cite: `N'oublions jamais que No\xEBl est le souci du vrai partage, ce n'est pas un miracle, mais une fa\xE7on de vivre quotidien.`,
    author: `Josiane Coeijmans`,
    tags: ["No\xEBl"]
  },
  {
    cite: `Une lumi\xE8re ici requiert une ombre l\xE0-bas.`,
    author: `Virginia Woolf`,
    tags: []
  },
  {
    cite: `La femme est pr\xE9cieuse, elle donne naissance aux enfants.`,
    author: `Olympe de Gouges`,
    tags: []
  },
  {
    cite: `Les plus beaux livres sont ceux qui n'ont jamais \xE9t\xE9 \xE9crits.`,
    author: `Anatole France`,
    tags: ["lit\xE9rature"]
  },
  {
    cite: `Je n'enseigne pas aux enfants, je leur donne de la joie.`,
    author: `Isadora Duncan`,
    tags: ["bonheur"]
  },
  {
    cite: `La danse est le mouvement de l'univers concentr\xE9 dans un individu.`,
    author: `Isadora Duncan`,
    tags: []
  },
  {
    cite: `La paresse peut para\xEEtre attrayante, mais le travail apporte la satisfaction.`,
    author: `Anne Frank`,
    tags: ["travail"]
  },
  {
    cite: `Un livre, c'est un billet de voyage \xE0 la port\xE9e de tous.`,
    author: `Josiane Coeijmans`,
    tags: ["lit\xE9rature"]
  },
  {
    cite: `Tous les secrets de l'\xE2me d'un auteur, toutes sses exp\xE9riences, toutes les qualit\xE9s de son esprit sont grav\xE9s dans son oeuvre.`,
    author: `Virginia Woolf`,
    tags: ["lit\xE9rature"]
  },
  {
    cite: `N'oubliez pas qu'il faut prendre la vie avec s\xE9r\xE9nit\xE9 et joie quoi qu'il arrive.`,
    author: `Rosa Luxembourg`,
    tags: ["bonheur", "joie"]
  },
  {
    cite: `L'humour est le premier des dons \xE0 p\xE9rir dans une langue \xE9trang\xE8re.`,
    author: `Virginia Woolf`,
    tags: ["humour"]
  },
  {
    cite: `D'une fa\xE7on g\xE9n\xE9rale, on ne doit pas oublier d'\xEAtre bon, car la bont\xE9, dans les relations avec les hommes, fait bien plus qua la s\xE9v\xE9rit\xE9.`,
    author: `Rosa Luxembourg`,
    tags: []
  },
  {
    cite: `Prenez-moi tout mais laissez-moi l'extase et je serai plus riche que mes semblables.`,
    author: `Emily Dickinson`,
    tags: ["plaisir"]
  },
  {
    cite: `Quand on a bonne conscience, c'est No\xEBl en permanence.`,
    author: `Benjamin Franklin`,
    tags: ["honn\xEAtet\xE9"]
  },
  {
    cite: `Si la vie est un roman, prends ta plume et viens \xE9crire avec moi, les plus beaux chapitres.`,
    author: `Josiane Coeijmans`,
    tags: ["amour"]
  },
  {
    cite: `Notre plus grande faiblesse r\xE9side dans l'abandon ; la fa\xE7on la plus s\xFBre de r\xE9ussir est d'essayer une autre fois.`,
    author: `Thomas Edison`,
    tags: ["succ\xE8s", "pers\xE9v\xE9rance"]
  },
  {
    cite: `Le courage croit en osant et la peur en h\xE9sitant.`,
    author: `Proverbe romain`,
    tags: ["courage", "peur"]
  },
  {
    cite: `Dans les grandes choses, avant l'effort qui r\xE9ussit, il y a presque toujours des efforts qui passent inaper\xE7us.`,
    author: `Laure Conan`,
    tags: []
  },
  {
    cite: `Le bonheur, c'est cet instant, cette lueur qui embellit le jour et rejaillit sur autrui.`,
    author: `Josiane Coeijmans`,
    tags: ["bonheur"]
  },
  {
    cite: `Les choses n'arrivent quasi jamais comme on se les imagine.`,
    author: `Madame de S\xE9vign\xE9`,
    tags: ["hasard"]
  },
  {
    cite: `Il n\u2019y a pas plus de raison de trop s\u2019accuser de ses d\xE9fauts que de s\u2019en trop excuser.`,
    author: `Madeleine de Souvr\xE9`,
    tags: ["humilit\xE9", "confiance"]
  },
  {
    cite: `La nature est \xE9ternellement jeune, belle et g\xE9n\xE9reuse. Elle verse la po\xE9sie et la beaut\xE9 \xE0 tous les \xEAtres, \xE0 toutes les plantes, qu'on laisse s'y d\xE9velopper.`,
    author: `George Sand`,
    tags: []
  },
  {
    cite: `La famille, c'est l'amour sans regrets et sans amertume.`,
    author: `Ninon de Lenclos`,
    tags: ["amour"]
  },
  {
    cite: `Cultive tes pens\xE9es, des fleurs pourraient en fleurir.`,
    author: `Josiane Coeijmans`,
    tags: ["pens\xE9e"]
  },
  {
    cite: `Il n'appartient qu'\xE0 celle que le hasard a \xE9lev\xE9e \xE0 une place \xE9minente, de donner du poids \xE0 l'essor des Droits de la Femme et d'en acc\xE9l\xE9rer les succ\xE8s.`,
    author: `Olympe de Gouges`,
    tags: []
  },
  {
    cite: `L'amour a un caract\xE8re si particulier qu'on ne peut le cacher o\xF9 il est, ni le feindre o\xF9 il n'est pas.`,
    author: `Madeleine de Souvr\xE9`,
    tags: ["amour"]
  },
  {
    cite: `La vie chante aussi dans le sable qui craque sous les pas lents et lourds des gardes, quand on sait l'\xE9couter.`,
    author: `Rosa Luxemburg`,
    tags: []
  },
  {
    cite: `La gastronomie fait trembler d'intelligence nos narines.`,
    author: `Charles Monselet`,
    tags: ["\xE9picurien"]
  },
  {
    cite: `Quand on rentre en soi-m\xEAme, on s'aper\xE7oit qu'on poss\xE8de exactement ce que l'on d\xE9sirait.`,
    author: `Simone Weil`,
    tags: []
  },
  {
    cite: `Les choses ne sont pas bonnes parce qu'elles sont vieilles, elles sont vieilles parce qu'elles sont bonnes.`,
    author: `A. Toulouse`,
    tags: []
  },
  {
    cite: `Nous devons croire que nous sommes dou\xE9s pour quelque chose, et que cette chose, \xE0 n'importe quel prix, doit \xEAtre atteinte.`,
    author: `Marie Curie`,
    tags: ["confiance"]
  },
  {
    cite: `Soyez des hommes ou mieux : des surhommes. Soyez fid\xE8les aux buts trac\xE9s.`,
    author: `Mary Shelley`,
    tags: []
  },
  {
    cite: `Je suis une femme libre.`,
    author: `Olympe de Gouges`,
    tags: ["f\xE9minisme"]
  },
  {
    cite: `Je fais le plus de choses que je peux par amour pour me reposer d'en faire tant par n\xE9cessit\xE9.`,
    author: `Marie No\xEBl`,
    tags: []
  },
  {
    cite: `Les chefs-d'oeuvres ne sont jamais que des tentatives heureuses.`,
    author: `George Sand`,
    tags: ["chance"]
  },
  {
    cite: `Les d\xE9tails font la perfection, et la perfection n'est pas un d\xE9tail.`,
    author: `L\xE9onard de Vinci`,
    tags: []
  },
  {
    cite: `Je fais le plus de choses que je peux par amour pour me reposer d'en faire tant par n\xE9cessit\xE9.`,
    author: `Marie No\xEBl`,
    tags: ["amour"]
  },
  {
    cite: `Celui m\xEAme qui veut \xE9crire son r\xEAve se doit d'\xEAtre infiniment \xE9veill\xE9.`,
    author: `Paul Val\xE9ry`,
    tags: []
  },
  {
    cite: `Le beau est ce qu'on ne peut pas vouloir change.`,
    author: `Simone Weil`,
    tags: []
  },
  {
    cite: `C'est le miracle de l'amour de n'avoir pas besoin de mots pour se comprendre.`,
    author: `Laure Conan`,
    tags: ["amour"]
  },
  {
    cite: `L'attention est la forme la plus rare et la plus pure de la g\xE9n\xE9rosit\xE9.`,
    author: `Simone Weil`,
    tags: []
  }
  // {cite: `.`, author: ``, tags: []},
];
var cites = from(data).pipe(
  // filter to prevent duplicated rows
  distinct(({
    cite
  }) => cite),
  // transform each item into a Cite Object
  map((next, index) => {
    return new Cite().setId(index).setCite(next.cite).setAuthor(next.author).setTags(next.tags);
  }),
  // restore into one stream of items (from() will send a complete event that allows toArray() to be triggered)
  toArray(),
  take(1)
  // auto unsubscribe, force complete
);

// src/app/tools/CiteOfTheDay.service.ts
var CiteOfTheDay = class _CiteOfTheDay {
  static getStartYear(citesCount) {
    let startPoint = 1;
    let padding = "";
    let substrLength = 4;
    while (citesCount > startPoint * 365 && startPoint <= 1e4) {
      startPoint *= 10;
      padding += "0";
      substrLength--;
    }
    const startYearDate = /* @__PURE__ */ new Date();
    startYearDate.setFullYear(parseInt((/* @__PURE__ */ new Date()).getFullYear().toString(10).substr(0, substrLength) + padding, 0));
    return startYearDate.getFullYear();
  }
  static yearIs366Days(year) {
    const monthFebruaryIndex = 1;
    const estimatedLastDayOfFebruary = new Date(year, monthFebruaryIndex, 29);
    return estimatedLastDayOfFebruary.getMonth() === monthFebruaryIndex;
  }
  static getLastDayOfMonth(iYear, jMonth) {
    return new Date(iYear, jMonth + 1, 0).getDate();
  }
  static getNumberOfDayInCurrentYear(today, iYear) {
    let numberOfDayInCurrentYear = 0;
    for (let jMonth = 0; jMonth <= today.getMonth(); jMonth++) {
      if (jMonth === today.getMonth()) {
        numberOfDayInCurrentYear += today.getDate();
        break;
      }
      numberOfDayInCurrentYear += _CiteOfTheDay.getLastDayOfMonth(iYear, jMonth);
    }
    return numberOfDayInCurrentYear;
  }
  static getStackOfYears(aDate, startYear) {
    const years = [];
    const currentYear = aDate.getFullYear();
    if (currentYear === startYear) {
      years[currentYear] = _CiteOfTheDay.getNumberOfDayInCurrentYear(aDate, currentYear);
      return years;
    }
    for (let iYear = startYear; iYear <= currentYear; iYear++) {
      if (iYear === currentYear) {
        years[iYear] = _CiteOfTheDay.getNumberOfDayInCurrentYear(aDate, iYear);
        break;
      }
      years[iYear] = _CiteOfTheDay.yearIs366Days(iYear) ? 366 : 365;
    }
    return years;
  }
  static getCiteOfTheDay(cites2) {
    const startYear = _CiteOfTheDay.getStartYear(cites2.length);
    const years = _CiteOfTheDay.getStackOfYears(/* @__PURE__ */ new Date(), startYear);
    const days = years.reduce((previous, current) => previous + current);
    let citeIndex = 0;
    for (let i = 1; i <= days; i++) {
      if (citeIndex === cites2.length) {
        citeIndex = 0;
        continue;
      }
      citeIndex++;
    }
    return cites2[citeIndex];
  }
};

// src/app/services/Cites.ts
var Cites = /* @__PURE__ */ (() => {
  const _Cites = class _Cites {
    constructor(router) {
      this.router = router;
      this.originalCites = [];
      this.cites = new BehaviorSubject([]);
      this.cites$ = this.cites.asObservable().pipe(
        // this is for a kind of immutability: if something push/pop/shift/... the CiteI[] it
        // won't alter every subcriber that has saved the data
        // map(next => rfdc()(next)), // @todo find why it destroy the original object : Cite
        // become a simple object & the proto is not copied
        map((next) => {
          return next.map((cite) => {
            const newCite = new Cite();
            newCite.setId(cite.getId()).setAuthor(cite.getAuthor()).setCite(cite.getCite()).setTags(cite.getTags());
            return newCite;
          });
        }),
        distinct(),
        take(1)
        // auto unsubscribe, force complete
      );
      this.count = 0;
      cites.pipe(tap((next) => this.originalCites = next), tap((next) => this.count = next.length), switchMap(() => this.reset())).subscribe();
    }
    reset() {
      return of(this.originalCites).pipe(filter((value) => !!value), tap((next) => this.cites.next(next)));
    }
    search(search) {
      if (!this.cites.getValue()) {
        return EMPTY;
      }
      return of(this.cites.getValue()).pipe(switchMap((next) => from(next)), filter((item) => {
        if (!search) {
          return true;
        }
        return item && (item.getCite().toLowerCase().includes(search.toLowerCase()) || item.getAuthor().toLowerCase().includes(search.toLowerCase()) || item.getTags().includes(search.toLowerCase()));
      }), toArray());
    }
    searchByAuthor(author) {
      if (!this.cites.getValue()) {
        return EMPTY;
      }
      return of(this.cites.getValue()).pipe(switchMap((next) => from(next)), filter((item) => {
        return item && item.getAuthor().toLowerCase().includes(author.toLowerCase());
      }), toArray());
    }
    countSearchFoundCites() {
      if (
        //this.router.snapshot.queryParams &&
        this.router.snapshot?.queryParams["q"]
      ) {
        return this.count;
      }
      if (this.originalCites) {
        this.count = this.originalCites.length;
      }
      return this.count;
    }
    getCiteOfTheDay() {
      return this.cites.pipe(map((cites2) => CiteOfTheDay.getCiteOfTheDay(cites2)));
    }
    getRandomCite() {
      return this.cites.pipe(map((cites2) => cites2[Math.floor(Math.random() * cites2.length)]));
    }
  };
  _Cites.\u0275fac = function Cites_Factory(t) {
    return new (t || _Cites)(\u0275\u0275inject(ActivatedRoute));
  };
  _Cites.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Cites,
    factory: _Cites.\u0275fac
  });
  let Cites2 = _Cites;
  return Cites2;
})();

export {
  Cites
};
//# sourceMappingURL=chunk-FNKKVVHO.mjs.map

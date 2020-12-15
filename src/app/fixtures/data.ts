import {Cite, CiteI} from '../models/Cite';
import {from, Observable, of} from 'rxjs';
import {map, switchMap, toArray} from 'rxjs/operators';

/**
 * This file should be only imported from Service Cites tht will simulate a DataStore
 */
const data: {cite: string, author: string}[] = [
  {cite: `Chaque commencement recèle une magie cachée.`, author: `Hermann Hesse`},
  {cite: `L'amour ne voit pas avec les yeux mais avec l'âme.`, author: `William Shakespeare`},
  {cite: `L'espoir, c'est rentrer sous la pluie et sortir sous un beau soleil.`, author: `Proverbe africain`},
  {cite: `Les folies sont les seules choses qu'on ne regrette jamais.`, author: `Oscar Wilde` },
  {cite: `Un des bonheurs de l'amitié c'est d'avoir à qui confier un secret.`, author: `Alessandro Manzoni`},
  {cite: `Un sourire est une clef secrète qui ouvre bien des coeurs.`, author: `Baden-Powell`},
  {cite: `Le chocolat plonge des êtres par ailleurs normaux dans d'étranges états extatiques.`, author: `John West`},
  {cite: `On a deux vies. La deuxième commence le jour où on réalise qu'on en a juste une.`, author: `Confucius`},
  {cite: `Je vais être jaloux de cette tour. Elle est plus célèbre que moi.`, author: `Gustave Eiffel`},
  {cite: `Je me moque de savoir beaucoup de choses : je veux savoir des choses que j'aime.`, author: `Jules Renard`},
  {cite: `Nous portons en nous des merveilles que nous cherchons en dehors de nous.`, author: `Thomas browne`},
  {cite: `Là où l'on s'aime il ne fait jamais nuit.`, author: `Proverbe africain`},
  {cite: `Le risque de prendre une mauvaise décision n'est rien comparé à la terreur de l'indécision.`, author: `Maimonide`},
  {cite: `En tentant l'impossible, on peut atteindre le plus haut niveau du possible.`, author: `August Strindberg`},
  {cite: `Souris à la vie pour qu'elle te sourie.`, author: `Proverbe tunisien`},
  {cite: `L'important n'est pas ce que l'on regarde mais ce que l'on voit.`, author: `H. D. Thoreau`},
  {cite: `Assure-toi que la bougie est allumée avant d'éteindre l'allumette.`, author: `Proverbe créole`},
  {cite: `Quand l'amour grandit en toi, la beauté fat de même. Car l'amour est la beauté de l'âme.`, author: `Marcel Proust`},
  {cite: `Le véritable voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux.`, author: `Marcel Proust`},
  {cite: `Dans la vie tu as deux choix le matin : soit tu te recouches pour poursuivre ton rêve, soit tu te lèves pour le réaliser.`, author: `Axel Albanel`},
  {cite: `La diplomatie, c'est faire et dire les plus vilaines choses de la manière la plus élégante.`, author: `Isaac Goldberg`},
  {cite: `L'imagination vaut bien des voyages et elle coûte moins cher.`, author: `George William Curtis`},
  {cite: `Faites que le rêve dévore votre vie, afin que la vie ne dévore votre rêve.`, author: `Antoine de Saint-Exupéry`},
  {cite: `Deviens sans cesse celui que tu es, sois le maître et le sculpteur de toi-même.`, author: `Nietzsche`},
  {cite: `La nature nous a donné une langue et deux oreilles, afin que nous écoutions le double de ce que nous disons.`, author: `Zénon`},
  {cite: `Chaque baiser est un tremblement de terre.`, author: `George Gordon Byron`},
  {cite: `Un grand écrivain se remarque au nombre de pages qu'il ne publie pas.`, author: `Stéphane Mallarmé`},
  {cite: `Fais ce que tu aimes et fais-le souvent.`, author: `Anonyme`},
  {cite: `Aimer savoir est humain, savoir aimer est divin.`, author: `Joseph Roux`},
  {cite: `Plus le visage est sérieux, plus le sourire est beau.`, author: `François René de Chateaubriand`},
  {cite: `Le sourire que tu envoies revient vers toi.`, author: `Proverbe hindou`},
  {cite: `Le sourire fait fondre la glace, installe la confiance et guérit les blessures, c'est la clef des relations humaines sincères.`, author: `Voltaire`},
  {cite: `On n'est jamais puni pour avoir fait mourir de rire.`, author: `Proverbe chinois`},
  {cite: `Il y a autant de beautés qu'il y a de manières habituelles de chercher le bonheur.`, author: `Charles Baudelaire`},
  {cite: `Toute révélation d'un secret est la faute de celui qui l'a confié.`, author: `Jean de la Bruyère`},
  {cite: `A celui qui sait attendre tout vient à temps .`, author: `François Rabelais`},
  {cite: `On voyage pour changer, non de lieu, mais d'idées.`, author: `Hippolyte Taine`},
  {cite: `La beauté est dans les yeux de celui qui regarde.`, author: `Oscar Wilde`},
  {cite: `Les amis sont des compagnons de voyage, qui nous aident à avancer sur le chemin d’une vie plus heureuse.`, author: `Pythagore`},
  {cite: `Le plaisir est le bonheur des fous, le bonheur est le plaisir des sages.`, author: `Jules Barbey d'Aurevilly`},
  {cite: `La joie est en tout, il suffit de savoir l'extraire.`, author: `Confucius`},
  {cite: `La table est l'entremetteuse de l'amitié.`, author: `Proverbe français`},
  {cite: `Le génie, c'est l'enfance retrouvée à volonté.`, author: `Charles Baudelaire`},
  {cite: `Le remède à l'ennui c'est la curiosité. La curiosité elle, est sans remède.`, author: `Anonyme`},
  {cite: `Il n'est pas de plaisir plus doux que de surprendre un homme en lui donnant plus qu'il n'espère.`, author: `Charles Baudelaire`},
  {cite: `Sachez vous éloigner car, lorsque vous reviendrez à votre travail votre jugement sera plus sûr.`, author: `Léonard de Vinci`},
  {cite: `Parfois on ne perçoit l'amour ca la vie quotidienne peut nous rendre aveugle.`, author: `Anonyme`},
  {cite: `La bonne volonté raccourcit le chemin.`, author: `Proverbe brésilien`},
  {cite: `Bonne cuisine et bon vin, c'est le paradis sur terre.`, author: `Henri IV`},
  {cite: `La musique est la langue des émotions.`, author: `Emmanuel Kant`},
  {cite: `Guérir parfois, soulager souvent, écouter toujours.`, author: `Louis Pasteur`},
  {cite: `Les mots manquent aux émotions.`, author: `Victor Hugo`},
  {cite: `Le plaisir se ramasse la joie se cueille et le bonheur se cultive.`, author: `Bouddha`},
  {cite: `Que ton baiser ait l'ardeur du soleil et la rose te donnera tout son parfum.`, author: `Proverbe kurde`},
  {cite: `Quand ce que vous pensez, ce que vous dites et ce que vous faites sont en harmonie, le bonheur vous appartient.`, author: `Gandhi`},
  {cite: `Qui veut faire le bonheur des autres a déjà fait le sien.`, author: `Proverbe chinois`},
  {cite: `La sagesse, c'est d'avoir des rêves suffisamment grands pour ne pas les perdre de vue lorsqu'on les poursuit.`, author: `Oscar Wilde`},
  {cite: `Eclaire demain avec aujourd'hui !`, author: `Elizabeth Barret Browning`},
  {cite: `Maison de paille où l'on rit vaut mieux qu'un palais où l'on pleure.`, author: `Proverbe chinois`},
  {cite: `Toute l'invention consiste à faire quelque chose de rien.`, author: `Jean Racine`},
  {cite: `L'idéal de l'amitié c'est de se sentir un et de rester deux.`, author: `Anne Sophie Swetchine`},
  {cite: `Un seul homme armé de courage vaut une majorité.`, author: `Andrew Jackson`},
  {cite: `La Tour Eiffel ne devait durer que 20 ans, ... elle est devenue aussi éternelle que Paris !`, author: `Anonyme`},
  {cite: `En se posant sur la branche, le papillon craint de la briser.`, author: `Proverbe arménien`},
  {cite: `Peu importe où nous sommes, ma maison n'est pas un lieu, ma maison c'est toi.`, author: `Fynn Kliemann-Accueil`},
  {cite: `Un peu de jalousie éveille un amour heureux qui s'endort.`, author: `Mme Deshoulières`},
  {cite: `La simplicité est la sophistication suprême.`, author: `Léonard de Vinci`},
  {cite: `Quelque délicat que l'on soit en amour, on pardonne plus de fautes que dans l'amitié.`, author: `Jean de La Bruyère`},
  {cite: `Le travail, en autres avantages, a celui de raccourcir les journées et d'étendre la vie.`, author: `Denis Diderot`},
  {cite: `Si nous prenons la nature pour guide, nous ne nous égarerons jamais.`, author: `Cicéron`},
  {cite: `L'accent circonflexe est l'hirondelle de l'écriture.`, author: `Jules Renard`},
  {cite: `L'émotion artistique cesse où l'analyse et la pensée interviennent.`, author: `Max Jacob`},
  {cite: `L'accent est l'âme du discours, il lui donne le sentiment et la vérité.`, author: `Jean-Jacques Rousseau`},
  {cite: `La lutte donne au triomphe la saveur de la passion, et la victoire embellit la conquête.`, author: `Georges Meredith`},
  {cite: `De toutes les passions, la seule vraiment respectable me parait être la gourmandise.`, author: `Guy de Maupassant`},
  {cite: `Jamais les mots ne manquent aux îdées ; ce sont les îdées qui manquent aux mots.`, author: `Joseph Joubert`},
  {cite: `L'âge auquel on partage tout est généralement l'âge où on n'a rien.`, author: `Alphonse Karr`},
  {cite: `Une erreur originale vaut mieux qu'une vérité banale.`, author: `Fiodor Dostoïevski`},
  {cite: `Le veinard est celui qui arrive à tout ; le malchanceux est celui à qui tout arrive.`, author: `Eugène Labiche`},
  {cite: `Il n'y a pas de moyen pour polir le hérisson.`, author: `Aristophane`},
  {cite: `L'amour qui naît subitement est le plus long à guérir.`, author: `Jean de La Bruyère`},
  {cite: `Un grain de gaieté assaisonne tout.`, author: `Baltasar Gracian`},
  {cite: `J'aime le lit, c'est le seul endroit où, comme le chat, je puis faire le mort en respirant, tout en étant vivant.`, author: `Arthur Cravan`},
  {cite: `Le seul homme à ne jamais faire d'erreur est celui qui ne fait rien.`, author: `Théodore Roosevelt`},
  {cite: `Le plus grand voyageur est celui qui a su faire une fois le tour de lui-même.`, author: `Confucius`},
  {cite: `C'est la nuit qu'il est beau de croire à la lumière.`, author: `Edmond Rostand`},
  {cite: `Pour l'amour d'une rose, le jardinier devient l'esclave de mille épines.`, author: `Proverbe turc`},
  {cite: `Déploie ton jeune courage, enfant ; c'est ainsi qu'on s'élève jusqu'aux astres.`, author: `Virgile`},
  {cite: `Nul ne veut le bien public que quand il s'accorde avec le sien.`, author: `Jean-Jacques Rousseau`},
  {cite: `On avale à pleine gorgée le mensonge qui nous flatte, et l'on boit goutte à goutte une vérité qui nous est amère.`, author: `Denis Diderot`},
  {cite: `Appelons hommes de génie qui font vite ce que nous faisons lentement.`, author: `Joseph Joubert`},
  {cite: `Rien n'est sérieux en ce bas monde que le rire.`, author: `Gustave Flaubert`},
  {cite: `Qui fait rire l'esprit se rend maître du coeur.`, author: `Cardinal de Bernis`},
  {cite: `On ne peut apprendre au crabe à marcher droit.`, author: `Aristophane`},
  {cite: `Ferme les yeux et tu verras.`, author: `Joseph Joubert`},
  {cite: `A l'oiseau, le nid; à l'araignée, la toile; à l'homme, l'amitié.`, author: `William Blake`},
  {cite: `Rien ne s'accomplit dans ce monde sans passion.`, author: `Georg Whilhelm Friedrich Hegel`},
  {cite: `Les paroles sages tombent quelquefois dans l'oreille d'un sourd ; mais un mot gentil n'est jamais perdu.`, author: `Arthur Helps`},
  {cite: `Je crois beaucoup en la chance, et je constate que plus je travaille, plus elle me sourit.`, author: `T. Jefferson`},
  {cite: `L'expérience est un peigne que la nature nous donne une fois que nous sommes chauves.`, author: `Proverbe belge`},
  {cite: `Le rire et le sommeil sont les meilleurs remèdes du monde.`, author: `Proverbe irlandais`},
  {cite: `L'enfance est un papillon qui se hâte de brûler ses blanches ailes aux flammes de la jeunesse.`, author: `Aloysius Bertrand`},
  {cite: `La puissance, c'est imposer sa volonté aux autres. La force, c'est se l'imposer à soi-même.`, author: `Lao Zi`},
  {cite: `A Noël, je n'ai pas plus envie de rose que je ne voudrais de neige au printemps. J'aime chaque saison pour ce qu'elle apporte.`, author: `William Shakespeare`},
  {cite: `Le meilleur secret pour ne jamais tomber c'est de rester toujours assis.`, author: `Stendhal`},
  {cite: `Pour retrouver sa jeunesse, il n'y a qu'à recommencer ses folies.`, author: `Théodore Roosevelt`},
  {cite: `Il y a toujours un peu de folie dans l'amour mais il y a toujours un peu de raison dans la folie.`, author: `Nietzsche`},
  {cite: `Faire caca, c'est se libérer d'un poids.`, author: `Camille Richard`},
  {cite: `L'expérience est le nom que l'on donne à ses erreurs.`, author: `Oscar Wilde`},
  {cite: `Ne juge aucun homme avant d'avoir marché avec ses mocassins durant deux lunes.`, author: `Proverbe amérindien`},
  {cite: `Vous ne parviendrez jamais à faire des sages si vous ne faites d'abord des polissons.`, author: `Jean-Jacques Rousseau`},
  {cite: `Ce qui étonne, étonne une fois, mais ce qui est admirable est de plus en plus admiré.`, author: `Joseph Joubert`},
  {cite: `Ce qui est admirable, ce n'est pas que le champ des étoiles soit si vaste, c'est que l'homme l'ait mesuré.`, author: `Anatole France`},
  {cite: `Le tout c'est d'avoir du génie à vingt ans et du talent à quatre-vingts.`, author: `Camille Corot`},
  {cite: `La mesure de l'amour c'est d'aimer sans mesure.`, author: `Saint-Augustin`},
  {cite: `Noël n'est pas un jour ni une saison, c'est un état d'esprit.`, author: `John Calvin Coolidge`},
  {cite: `Il n'est pas d'hiver sans neige, de printemps sans soleil, et de joie sans être partagée.`, author: `Proverbe serbe`},
  {cite: `Les plus beaux mots du monde ne sont que des sons inutiles si vous ne pouvez pas les comprendre.`, author: `Anatole France`},
  {cite: `Si haut que parvienne une chose lancée, c'est à terre qu'elle retourne.`, author: `Proverbe africain`},
  {cite: `Pour faire du bien, personne n'a besoin de réfléchir.`, author: `Johann Wolfgang Von Goethe`},
  {cite: `L'âme porte les couleurs de tes pensées.`, author: `Marc Aurel`},
  {cite: `Hâte-toi de bien vivre et songe que chaque jour est à lui seul une vie.`, author: `Sénèque`},
  {cite: `Tout âge porte ses fruits, il faut savoir les cueillir.`, author: `Raymond Radiguet`},
  {cite: `Nul devoir n'est plus sous-estimé que celui d'être heureux.`, author: `R. L. Stevenson`},
  {cite: `Peu de gens ont le courage d'être lâches devant témoins.`, author: `Théophile Gautier`},
  {cite: `L'or te donne la terre, la terre te donne de l'or.`, author: `Proverbe indien`},
  {cite: `Le regard est le médiateur des coeurs.`, author: `Anonyme`},
  {cite: `Ce n'est pas parce que les choses sont difficiles que nous n'osons pas, c'est parce que nous n'osons pas qu'elles sont difficiles.`, author: `Sénèque`},
  {cite: `En art comme en amour, l'instinct suffit.`, author: `Anatole France`},
  {cite: `Le cadeau, dira-t-on, n'a rien de somptueux, mais venant d'un ami, tout nous est précieux.`, author: `Théocrite`},
  {cite: `La franchise ne consiste pas à dire tout ce que l'on pense mais à penser tout ce que l'on dit.`, author: `Proverbe tchadien`},
  {cite: `Les petits cadeaux entretiennent l'amitié. Le premier qui a dit dela voulait se faire donner quelque chose.`, author: `Eugène Scribe`},
  {cite: `Les premiers sentiments sont toujours les plus naturels.`, author: `Madame de Sévigné`},
  {cite: `Qui ne peut comme il veut, doit vouloir comme il peut.`, author: `Térence`},
  {cite: `Etre jeune, c'est avoir un esprit qui calcule et un coeur qui ne calcule pas.`, author: `René Bazin`},
  {cite: `La séduction suprême n'est pas d'exprimer ses sentiments. C'est de les faire soupçonner.`, author: `Barbey d'Aurevilly`},
  {cite: `L'action ne doit pas être une réaction mais une création.`, author: `Censier (droit féodal)`},
  {cite: `On ne devrait s'étonner que de pouvoir encore s'étonner.`, author: `François de La Rochefoucauld`},
  {cite: `Le coeur n'a pas de maître, il n'est pas un esclave, et de toute contrainte il sait briser l'entrave.`, author: `Adam Mickiewicz`},
  {cite: `Le passé est un phare, et non un port.`, author: `Proverbe russe`},
  {cite: `Un poème est un mystère dont le lecteur doit chercher la clef.`, author: `Stéphane Mallarmé`},
  {cite: `Dans une avalanche, aucun flocon ne se sent jamais responsable.`, author: `Voltaire`},
  {cite: `A vingt ans, c'est la volonté qui règne, à trente ans l'esprit, et à quarante le jugement.`, author: `Benjamin Franklin`},
  {cite: `Ayez le courage de ne pas savoir un grand nombre de choses afin d'éviter la certitude de ne rien savoir.`, author: `Sydney Smith`},
  {cite: `Je crois pouvoir dire d'un poste éminent et délicat qu'on y monte plus aisément qu'on ne s'y conserve.`, author: `Jean de La Bruyère`},
  {cite: `Ecrire, c'est déjà mettre du noir sur du blanc.`, author: `Stéphane Mallarmé`},
  {cite: `Il est temps de vivre la vie que tu t'es imaginée.`, author: `Henry James`},
  {cite: `Qu'importe aux coeurs unis ce qui change autour d'eux.`, author: `Alphonse de Lamartine`},
  {cite: `N'allez pas là où le chemin peut mener. llez là où il n'y a pas de chemin et laissez une trace.`, author: `Ralph Waldo Emerson`},
  {cite: `Lorsqu'on tire sur un seul fil de la nature, on découvre qu'il est attaché au reste du monde.`, author: `John Muir`},
  {cite: `L'expérience est une lanterne que l'on porte sur le dos et qui n'éclaire jamais que le chemin parcouru.`, author: `Confucius`},
  {cite: `Apprends comme si tu devais vivre pour toujours et vis comme si tu devais mourrir ce soir !`, author: `Proverbe Tibétain`},
  {cite: `Si tu veux être heureux, sois-le.`, author: `Proverbe chinois`},
  {cite: `Le grand inconvénient des livres nouveaux est de nous empêcher de lire les anciens.`, author: `Joseph Joubert`},
  {cite: `On ne doit pas juger du mérite d'un homme par ses grandes qualités, mais par l'usage qu'il en sait faire.`, author: `Jean de La Bruyère`},
  {cite: `Apprenons à tendre la main pas seulement pour recevoir, mais également pour donner.`, author: `Wembo Jah Olela`},
  {cite: `J'ai décidé d'être heureux, c'est meilleur pour la santé.`, author: `Voltaire`},
  {cite: `Un instant de bonheur vaut mille ans dans l'histoire.`, author: `Voltaire`},
  {cite: `Toute beauté est une joie éternelle.`, author: `John Keats`},
  {cite: `Une joie partagée est une double joie, un chagrin partagé est un demi-chagrin.`, author: `Jacuqes Deval`},
  {cite: `Un seul être vous manque et tout est dépeuplé.`, author: `Alphonse de Lamartine`},
  {cite: `Si votre coeur est une rose, votre bouche dira des mots parfumés.`, author: `Proverbe russe`},
  {cite: `Ce que l'on conçoit bien s'énonce clairement, et les mots pour le dire arrivent aisément.`, author: `Nicolas Boileau`},
  {cite: `Années de cerises rouges met le rire sur les bouches.`, author: `Dicton français`},
  {cite: `Quelle noblesse d'avoir un ami, mais combien plus noble d'être un ami.`, author: `Richard Wagner`},
  {cite: `Pour les femmes, la douceur est le meilleur moyen d'avoir raison.`, author: `Madame de Maintenon`},
  {cite: `La perfection est un chemin, non une fin.`, author: `Proverbe coréen`},
  {cite: `Quiconque a bu une tasse de chocolat résiste à une journée de voyage.`, author: `Johann Wolfgang Von Goethe`},
  {cite: `Dis-toi d'abord ce que tu veux être, puis fais ce qu'il faut pour le devenir.`, author: `Epictète`},
  {cite: `L'art est une démonstration dont la nature est la preuve.`, author: `Georges Sand`},
  {cite: `L'art d'être tantôt très audacieux et tantôt très prudent est l'art de réussir.`, author: `Napoléon Bonaparte`},
  {cite: `L’amour, c’est la fusion, l’identification de deux êtres qui s’admirent et s’adorent l’un l’autre.`, author: `Georges Sand`},
  {cite: `L'art de l'écrivain consiste surtout à nous faire oublier qu'il emploie des mots.`, author: `Henri Bergson`},
  {cite: `Le désordre est simplement l'ordre que nous ne cherchons pas.`, author: `Henri Bergson`},
  {cite: `Le style est comme le cristal, sa pureté fait son éclat.`, author: `Victor Hugo`},
  {cite: `L'homme devrait mettre autant d'ardeur à simplifier sa vie qu'il en met à la compliquer.`, author: `Henri Bergson`},
  {cite: `En matière de sentiment, le manque de logique est la meilleure preuve de la sincérité.`, author: `Léon Tolstoï`},
  {cite: `Le défaut de l'égalité, c'est que nous ne la voulons qu'avec nos supérieurs.`, author: `Henri Becquet`},
  {cite: `Papillon, ce billet doux plié cherche une adresse de fleur.`, author: `Jules Renard`},
  {cite: `Si vous voulez que vos rêves se réalisent, ne dormez pas.`, author: `Proverbe juif`},
  {cite: `Si les cieux pleurent, la terre vivra.`, author: `Proverbe hawaiien`},
  {cite: `Les rêves d'un chat sont peuplés de souris.`, author: `Proverbe libanais`},
  {cite: `Nul n'est plus chanceux que celui qui croit à sa chance.`, author: `Proverbe allemand`},
  {cite: `Tout ce que tu feras sera dérisoire, mais il est essentiel que tu le fasses.`, author: `Gandhi`},
  {cite: `La rose n'a d'épines que pour celui qui veut la cueillir.`, author: `Proverbe chinois`},
  {cite: `Pour savoir où l'on va, il faut savoir où l'on est.`, author: `Proverbe tchadien`},
  {cite: `Sans la musique, la vie serait une erreur.`, author: `F. Nietzsche`},
  {cite: `A Noël, amusons-nous, profitons-en, car Noël ce n'est qu'une fois par an.`, author: `Thomas Tusser`},
  {cite: `Un homme sans culture, tel un chat sans moustaches, se sent perdu.`, author: `Anonyme`},
  {cite: `La science décrit la nature, la poésie la peint et l'embellit.`, author: `Georges-Louis Leclerc de Buffon`},
  {cite: `Une fleur fane même si on l'aime ; une mauvaise herbe croît même si on ne l'aime pas.`, author: `Dôgen`},
  {cite: `Quand tu lances la flèche de la vérité, trempe toujours la pointe dans du miel.`, author: `Proverbe arabe`},
  {cite: `L'espérance d'une joie est presque égale à la joie.`, author: `William Shakespeare`},
  {cite: `Qui donne ne doit jamais s'en souvenir. Qui reçoit ne doit jamais oublier.`, author: `Proverbe hébreu`},
  {cite: `Une fois la partie terminée, le roi et le pion retournent dans la même boîte.`, author: `Proverbe italien`},
  {cite: `Bien être : état d'esprit produit par la contemplation des ennuis d'autrui.`, author: `Ambrose Bierce`},
  {cite: `La vie, ce n'est pas d'attendre que l'orage passe, c'est d'apprendre à danser sous la pluie.`, author: `Sénèque`},
  {cite: `Accepter l'îdée d'une défaite, c'est être vaincu.`, author: `Maréchal Foch`},
  {cite: `Parmi les cinq sens, la vue, l'ouïe et l'odorat connaissent moins d'interdits que le toucher et le goût.`, author: `Léonard de Vinci`},
  {cite: `On n'a jamais fait de grande découverte sans hypothèse audacieuse.`, author: `Léonard de Vinci`},
  {cite: `L'expérience prouve que celui qui n'a jamais confiance en personne ne sera jamais déçu.`, author: `Léonard de Vinci`},
  {cite: `L'attention de celui qui écoute sert d'accompagnement dans la musique du discours.`, author: `Joseph Joubert`},
  {cite: `L'homme n'a point de port, le temps n'a pas de rive ; Il coule et nous passons !`, author: `Alphonse Lamartine`},
  {cite: `On se sert des couleurs, mais on peint avec le sentiment.`, author: `Jean Chardin`},
  {cite: `L'amour n'est pas seulement un sentiment, il est un art aussi.`, author: `Honoré de Balzac`},
  {cite: `Nous pesons rarement dans la même balance des offenses que nous faisons et les offenses que l'on nous fait.`, author: `Esope`},
  {cite: `Rarement nous pensons à ce que nous avons, mais souvent à ce qui nous manque.`, author: `Arthur Schopenhauer`},
  {cite: `Il faut toujours se réserver le droit de rire le lendemain de ses îdées de la veille.`, author: `Napoléon Bonaparte`},
  {cite: `Le cri du sentiment est toujours absurde ; mais il est sublime parce qu'il est absurde.`, author: `Charles Baudelaire`},
  {cite: `Lorsque les hommes travaillent ensemble, les montagnes se changent en or.`, author: `Proverbe chinois`},
  {cite: `Sourire trois fois par tous les jours rend inutile tout médicament.`, author: `Proverbe chinois`},
  {cite: `C'est par l'adresse que vaut le bûcheron, bien plus que par la force.`, author: `Homère`},
  {cite: `La plus perdue de toutes les journeés est celle où l'on a pas ri.`, author: `Nicolas de Chamfort`},
  {cite: `Nous tissons notre destin, nous le tirons de nous comme l'araignée de la toile.`, author: `François Mauriac`},
  {cite: `La musique commence là où s'arrête le pouvoir des mots.`, author: `Richard Wagner`},
  {cite: `La joie n'est pas dans les choses, elle est en nous.`, author: `Richard Wagner`},
  {cite: `Toute ascension vers un endroit merveilleux se fait par un escalier en spirale.`, author: `François Bacon`},
  {cite: `La nature fait les hommes semblables, la vie les rend différents.`, author: `Confucius`},
  {cite: `Une heure de conversation vaut mieux que cinquante lettres.`, author: `Madame de Sévigné`},
  {cite: `Sabot qui brille n'est pas toujours celui qui chausse le mieux.`, author: `Proverbe français`},
  {cite: `Ce qui est haïssable, ne le fait pas à ton prochain ; c'est là toute la loi. Le reste n'est que commentaire.`, author: `R. Hillel`},
  {cite: `Un rire sincère est un rayon de soleil dans une maison.`, author: `William Thackeray`},
  {cite: `Le bonheur c'est un regard, un mot, un sourire pour ceux qui s'aiment.`, author: `Delphine de Girardin`},
  {cite: `Nous sommes plus curieux du sens des rêves que des choses que nous voyons éveillés.`, author: `Diogène`},
  {cite: `Je ne te dis pas que tu es un bon à rien, je te dis que tu es mauvais en tout !`, author: `Le schpountz`},
  {cite: `Trouver n'est rien, c'est le plan qui est difficile.`, author: `Fiodor Dostoïevski`},
  {cite: `Le monde ne mourra jamais par manque de merveilles mais uniquement par manque d'émerveillement.`, author: `Gilbert Keith Chersterton`},
  {cite: `La modestie est le meilleur appât pour aller à la pêche aux compliments.`, author: `Gilbert Keith Chersterton`},
  {cite: `Une civilisation me parait se définir à la fois pas des questions qu'elle pose et par celles qu'elle ne pose pas.`, author: `André Malraux`},
  {cite: `Si vous voulez que la vie vous sourit, apportez-lui d'abord votre bonne humeur.`, author: `Spinoza`},
  {cite: `Tant de mains pour transformer ce monde, et si peu de regards pour le contempler !`, author: `Julien Gracq`},
  {cite: `Trois bougies repoussent les ténèbres ; la vérité, la connaissance et les lois de la nature.`, author: `Proverbe celtique`},
  {cite: `Aimez les yeux ouverts.`, author: `Titre d'un livre de Jorge Bucay`},
  {cite: `Une fleur fane même si on l'aime ; une mauvaise herbe croit même si on ne l'aime pas.`, author: `Dögen`},
  {cite: `Comme le dauphin j'ai le dos fin.`, author: `Maître Reiki Kanak`},
  {cite: `Lire, c'est voyager ; voyager, c'est lire.`, author: `Victor Hugo`},
  {cite: `Le bonheur n'est pas la destination, mais la manière de voyager.`, author: `Proverbe brésilien`},
  {cite: `Un roman, c'est un miroir qu'on promène le long du chemin.`, author: `Stendhal`},
  {cite: `Le bonheur arrive à ceux qui rient.`, author: `Proverbe japonais`},
  {cite: `Il n'est pas de plus lourd fardeau que d'avoir trop de désirs.`, author: `Lao Zi`},
  {cite: `Le plaisir de l'habitude est souvent plus doux encore que celui de la nouveauté.`, author: `Marcel Proust`},
  {cite: `La nuit n'est peut-être que la paupière du jour.`, author: `Omar Khayyâm`},
  {cite: `Le parfait bonheur ne consiste qu'à rendre les hommes heureux.`, author: `Jean-Baptiste Rousseau`},
  {cite: `Le soir de la vie apporte avec soi sa lampe.`, author: `Joseph Joubert`},
  {cite: `Il n'y a point de chemin vers le bonheur, le bonheur est le chemin.`, author: `Lao Tseu`},
  {cite: `Le bonheur est un rêve d'enfant réalisé à l'âge adulte.`, author: `Freud`},
  {cite: `Fais ton bonheur par le bonheur d'autrui.`, author: `Voltaire`},
  {cite: `Ne fais rien dans ta vie, qui te fasse redouter que ton voisin en prenne connaissance.`, author: `Epicure`},
  {cite: `Qu'on me donne six heures pour couper un arbre, j'en passerai quatre à préparer ma hache.`, author: `Abraham Lincoln`},
  {cite: `Notre plus grande gloire n'est pas de ne jamais tomber, mais de nous relever chaque fois.`, author: `Confucius`},
  {cite: `Les conséquences de la colère sont beaucoup plus graves que les causes.`, author: `Marc Aurèle`},
  {cite: `Chaque coup de colère est un coup de vieux, chaque sourire est un coup de jeune.`, author: `Proverbe chinois`},
  {cite: `La découverte d'un mets nouveau fait plus pour le bonheur du genre humain que la découverte d'une étoile.`, author: `Brillat-Savarin`},
  {cite: `La science est le savoir organisé. La sagesse est la vie organisée.`, author: `Emmanuel Kant`},
];

// Because RxJs is the life, so we don't export array, but an Observable. It will be used by the service to share data with the application
export const cites: Observable<CiteI[]> = of(data)
  .pipe(
      // filter to prevent duplicated rows
      map(next => next.filter((item: CiteI) => next.map(itemOfCites => itemOfCites.cite).includes(item.cite))),
      // switch into a stream of item instead of one stream of an array of items
      switchMap(next => from(next)),
      // transform each item into a Cite Object
      map(next => {
          return (new Cite())
              .setCite(next.cite)
              .setAuthor(next.author);
      }),
      // restore into one stream of items
      toArray()
  );

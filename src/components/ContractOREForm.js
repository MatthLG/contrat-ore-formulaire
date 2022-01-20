import React, { useState } from 'react'
import {
  Formik,
  Form,
  Field,
  ErrorMessage
} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'


import Blockchain from '../blockchain/Blockchain';
import Participants from '../blockchain/Participants.js';

const BlockchainNotariale = new Blockchain('poa');

const initialValues = {
annee_signature: '',
jour_mois_signature: '', 
lieu_signature: '',
notaire_information: '',
proprietaire_nom: '',
proprietaire_profession: '',
proprietaire_adresse: '',
proprietaire_lieu_naissance: '',
proprietaire_date_naissance: '',
proprietaire_nationalite: '',
cocontractant_nom: '',
cocontractant_adresse: '',
cocontractant_representant: '',
parcelle_lieudit: '',
parcelle_commune_code: '',
parcelle_commune_nom: '',
parcelle_reference_prefixe: '',
parcelle_reference_section: '',
parcelle_reference_numero: '',
parcelle_surface: '',
parcelle_description: '',
parcelle_etat_des_lieux: '',
duree: '',
obligations_reciproques: '',
bureau_hypotheques: '',
annexe_contenu: ''
}

const savedValues = {
annee_signature: '2022',
jour_mois_signature: '1 janvier', 
lieu_signature: 'Ecueillé',
notaire_information: 'Pierre Durand, notaire à Ecueillé',
proprietaire_nom: 'Monsieur Matthieu Le goanvec',
proprietaire_profession: 'agriculteur',
proprietaire_adresse: 'lieudit les augniais 36240 Praux',
proprietaire_lieu_naissance: 'Paris XIV',
proprietaire_date_naissance: '17 mai 1985',
proprietaire_nationalite: 'francaise',
cocontractant_nom: 'commune de Preaux',
cocontractant_adresse: '10 rue de la mairie',
cocontractant_representant: 'Monsieur Dupont',
parcelle_lieudit: 'les augniais',
parcelle_commune_code: '36240',
parcelle_commune_nom: 'Preaux',
parcelle_reference_prefixe: '000',
parcelle_reference_section: 'AH 01',
parcelle_reference_numero: '125',
parcelle_surface: '1364',
parcelle_description: 'description',
parcelle_etat_des_lieux: 'états des lieux ',
duree: '99',
obligations_reciproques: 'obligations réciproques',
bureau_hypotheques: 'Chateauroux',
annexe_contenu: 'annexe'
}

const onSubmit = (values, submitProps) => {
    //console.log('Form data', values);
    //console.log('submitProps', submitProps);
   
    let notaire = Participants.nodes()[1];
    BlockchainNotariale.createTransaction(values);
    
    BlockchainNotariale.generateBlock(notaire);

    console.log(BlockchainNotariale);
    console.log(BlockchainNotariale.chain[1]['transactions']);
    

    submitProps.setSubmitting(false);
    submitProps.resetForm();
}

const validationSchema = Yup.object({
annee_signature: Yup.string().required('Required'),
jour_mois_signature: Yup.string().required('Required'), 
lieu_signature: Yup.string().required('Required'),
notaire_information: Yup.string().required('Required'),
proprietaire_nom: Yup.string().required('Required'),
proprietaire_profession: Yup.string().required('Required'),
proprietaire_adresse: Yup.string().required('Required'),
proprietaire_lieu_naissance: Yup.string().required('Required'),
proprietaire_date_naissance: Yup.string().required('Required'),
proprietaire_nationalite: Yup.string().required('Required'),
cocontractant_nom: Yup.string().required('Required'),
cocontractant_adresse: Yup.string().required('Required'),
cocontractant_representant: Yup.string().required('Required'),
parcelle_lieudit: Yup.string().required('Required'),
parcelle_commune_code: Yup.string().required('Required'),
parcelle_commune_nom: Yup.string().required('Required'),
parcelle_reference_prefixe: Yup.string().required('Required'),
parcelle_reference_section: Yup.string().required('Required'),
parcelle_reference_numero: Yup.string().required('Required'),
parcelle_surface: Yup.string().required('Required'),
parcelle_description: Yup.string().required('Required'),
parcelle_etat_des_lieux: Yup.string().required('Required'),
duree: Yup.string().required('Required'),
obligations_reciproques: Yup.string().required('Required'),
bureau_hypotheques: Yup.string().required('Required'),
annexe_contenu: Yup.string().required('Required')
  })



function ContractOREForm() {
    const [formValues, setFormValues] = useState(null)
    return (
      <Formik
        initialValues={formValues || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize        
      >
        {formik => {
          //console.log('Formik props', formik)
          return (
    <Form>

<div>
    <div>
        <span>L'an</span>        
            <div className='form-control'>
                    <Field type='text' id='annee_signature' name='annee_signature' />
                    <ErrorMessage name='annee_signature' component={TextError} />
            </div>
        <span>,</span>
    </div>
    <div>
        <span> le</span>    
                    <div className='form-control'>               
                        <Field type='text' id='jour_mois_signature' name='jour_mois_signature' />
                        <ErrorMessage name='jour_mois_signature' component={TextError} />
                    </div>
        <span>.</span>
    </div>
    <div>
        <span> A</span> 
            <div className='form-control'>                
                        <Field type='text' id='lieu_signature' name='lieu_signature' />
                        <ErrorMessage name='lieu_signature' component={TextError} />
            </div>
        <span>.</span>
    </div>
    <div>
    <span> Maitre</span> 
        <div className='form-control'>              
                <Field type='text' id='notaire_information' name='notaire_information' />
                <ErrorMessage name='notaire_information' component={TextError} />
        </div>
    </div>
</div>

<span>
A RECU le présent acte contenant OBLIGATIONS REELLES 
ENVIRONNEMENTALES à la requête des personnes ci-après identifiées. 
ONT COMPARU 
Vu l’article L. 132-3 du code de l’environnement, 
Vu les articles L. 113-8 et suivants du code de l’urbanisme,
</span>            
            <div className='form-control'>                
                <Field type='text' id='proprietaire_nom' name='proprietaire_nom' />
                <ErrorMessage name='proprietaire_nom' component={TextError} />
            </div>
<span>, </span> 
            <div className='form-control'>
              <Field type='text' id='proprietaire_profession' name='proprietaire_profession' />
              <ErrorMessage name='proprietaire_profession' component={TextError} />
            </div>
<span>, deumerant à </span> 
            <div className='form-control'>               
                <Field type='text' id='proprietaire_adresse' name='proprietaire_adresse' />
                <ErrorMessage name='proprietaire_adresse' component={TextError} />
            </div>
<span>. </span> 
<div className='form-control'>                
                <Field type='text' id='proprietaire_nom_2' />           
</div>
<span>est né à </span>
            <div className='form-control'>                
                <Field type='text' id='proprietaire_lieu_naissance' name='proprietaire_lieu_naissance' />
                <ErrorMessage name='proprietaire_lieu_naissance' component={TextError} />
            </div>
<span>, le </span> 
            <div className='form-control'>              
              <Field type='text' id='proprietaire_date_naissance' name='proprietaire_date_naissance' />
              <ErrorMessage name='proprietaire_date_naissance' component={TextError} />
            </div>
<span>.</span> 
<div className='form-control'>                
                <Field type='text' id='proprietaire_nom_3' />           
</div>            
<span>
est de nationalité
</span> 
            <div className='form-control'>                
                <Field type='text' id='proprietaire_nationalite' name='proprietaire_nationalite' />
                <ErrorMessage name='proprietaire_nationalite' component={TextError} />
            </div>
<span>
. Résident au sens de la réglementation fiscale. 
Figurant ci-après indistinctement sous la dénomination « PROPRIETAIRE ». 
D’UNE PART
</span> 
            <div className='form-control'>
              <Field type='text' id='cocontractant_nom' name='cocontractant_nom' />
              <ErrorMessage name='cocontractant_nom' component={TextError} />
            </div>
<span>
, dont le siège est
</span> 
            <div className='form-control'>               
                <Field type='text' id='cocontractant_adresse' name='cocontractant_adresse' />
                <ErrorMessage name='cocontractant_adresse' component={TextError} />
            </div>
<span>
, représenté par 
</span> 
            <div className='form-control'>                
                <Field type='text' id='cocontractant_representant' name='cocontractant_representant' />
                <ErrorMessage name='cocontractant_representant' component={TextError} />
            </div>
<span>
e, dûment habilité aux fins des présentes par 
délibération 
Figurant ci-après indistinctement sous la dénomination de « COCONTRACTANT » ou 
de « DEPARTEMENT » 
D’AUTRE PART 
Considérant la compétence dévolue par les articles L. 113-8 et suivants du code de 
l’urbanisme instituant les Espaces Naturels Sensibles, le Département de la Gironde 
est considéré pour l’application des obligations réelles environnementales de l’article 
L 132-3 du code de l’environnement comme étant une collectivité publique agissant 
pour la protection de l’environnement. 
A CET EFFET, IL EST EXPRESSEMENT CONVENU ENTRE LES PARTIES CE QUI SUIT 
: 
<h2>1-PRESENCE - REPRESENTATION</h2> 
« PROPRIETAIRE »
</span>
<div className='form-control'>                
                <Field type='text' id='proprietaire_nom_4' />           
</div>            
<span>« COCONTRACTANT »</span> 
<div className='form-control'>                
                <Field type='text' id='cocontractant_representant_2' />           
</div>            
<span>
<h2>2-EXPOSE PREALABLE</h2> 
En conséquence, le « PROPRIÉTAIRE » entend utiliser la faculté qui lui est offerte par 
l’application des dispositions de l’article L.132-3 du code de l’environnement et ainsi 
constituer sur sa propriété une obligation réelle environnementale. 
Cette obligation a pour finalité le maintien, la conservation, la gestion et/ou la 
restauration d’éléments de la biodiversité ou de fonctions écologiques. 
Cette obligation, dont la consistance est définie par les stipulations du présent acte, 
est consentie au « COCONTRACTANT » qui accepte, sur les biens dont la désignation 
suit : 
<h2>3-DÉSIGNATION DES BIENS</h2> 
A «
</span>
            <div className='form-control'>              
              <Field type='text' id='parcelle_lieudit' name='parcelle_lieudit' />
              <ErrorMessage name='parcelle_lieudit' component={TextError} />
            </div>
<span> </span> 
            <div className='form-control'>                
                <Field type='text' id='parcelle_commune_code' name='parcelle_commune_code' />
                <ErrorMessage name='parcelle_commune_code' component={TextError} />
            </div>
<span> </span> 
            <div className='form-control'>
              <Field type='text' id='parcelle_commune_nom' name='parcelle_commune_nom' />
              <ErrorMessage name='parcelle_commune_nom' component={TextError} />
            </div>
<span>
 » 
La parcelle figurant ainsi au cadastre :
prefixe 
</span> 
            <div className='form-control'>               
                <Field type='text' id='parcelle_reference_prefixe' name='parcelle_reference_prefixe' />
                <ErrorMessage name='parcelle_reference_prefixe' component={TextError} />
            </div>
<span>
section
</span> 
            <div className='form-control'>                
                <Field type='text' id='parcelle_reference_section' name='parcelle_reference_section' />
                <ErrorMessage name='parcelle_reference_section' component={TextError} />
            </div>
<span>
numero
</span> 
            <div className='form-control'>              
              <Field type='text' id='parcelle_reference_numero' name='parcelle_reference_numero' />
              <ErrorMessage name='parcelle_reference_numero' component={TextError} />
            </div>
<span>
lieudit
</span> 
<div className='form-control'>                
                <Field type='text' id='parcelle_lieudit_2' />           
</div>
<span>    
surface (m2)
</span> 
            <div className='form-control'>                
                <Field type='text' id='parcelle_surface' name='parcelle_surface' />
                <ErrorMessage name='parcelle_surface' component={TextError} />
            </div>
<span>
Tel que le BIEN existe, avec tous les droits y attachés, sans aucune exception ni 
réserve. Un extrait de plan cadastral est annexé. 
<h2>4-DESCRIPTION GENERALE DES BIENS</h2>
</span> 
            <div className='form-control'>              
              <Field type='text' id='parcelle_description' name='parcelle_description' />
              <ErrorMessage name='parcelle_description' component={TextError} />
            </div>
<span>
<h2>5 – ETAT DES LIEUX</h2> 
</span> 
            <div className='form-control'>                
                <Field type='text' id='parcelle_etat_des_lieux' name='parcelle_etat_des_lieux' />
                <ErrorMessage name='parcelle_etat_des_lieux' component={TextError} />
            </div>
<span>
Les parties conviennent qu’un état des lieux sera réalisé à chaque changement de 
propriétaire et en fin de contrat. Ces états des lieux seront systématiquement annexés 
aux présentes. 
<h2>6-JOUISSANCE DES BIENS </h2>
Il est précisé que le site est à ce jour libre de toute occupation. 
<h2>7-RÉGLEMENTATION DE L’ORE</h2> 
Le notaire soussigné rappelle aux parties les dispositions de l’article L.132-3 du code 
de l’environnement. 
« Les propriétaires de biens immobiliers peuvent conclure un contrat avec une 
collectivité publique, un établissement public ou une personne morale de droit privé 
agissant pour la protection de l'environnement en vue de faire naître à leur charge, 
ainsi qu'à la charge des propriétaires ultérieurs du bien, les obligations réelles que bon 
leur semble, dès lors que de telles obligations ont pour finalité le maintien, la 
conservation, la gestion ou la restauration d'éléments de la biodiversité ou de fonctions 
écologiques. » 
Le notaire rappelle aux parties les dispositions de l’article 1103 du code civil repris ci-après. 
« Les contrats légalement formés tiennent lieu de loi à ceux qui les ont faits ». 
<h2>8 – DURÉE </h2>
La présente convention est consentie pour une durée de
</span> 
            <div className='form-control'>
              <Field type='text' id='duree' name='duree' />
              <ErrorMessage name='duree' component={TextError} />
            </div>
<span>
A l’expiration de cette période et faute par les parties d’avoir notifié la non 
reconduction, au moins six mois avant l’échéance par lettre recommandée avec 
demande d’avis de réception, le présent contrat sera renouvelé pour une nouvelle 
période de 
</span>
<div className='form-control'>                
                <Field type='text' id='duree_2' />           
</div>
<span>    
. 
<h2>9 – OBLIGATIONS RECIPROQUES DES PARTIES</h2>
</span>  
            <div className='form-control'>               
                <Field type='text' id='obligations_reciproques' name='obligations_reciproques' />
                <ErrorMessage name='obligations_reciproques' component={TextError} />
            </div>
<span>
<h2>10 – DECLARATIONS</h2> 
<h3>10.1 – Cession de contrat</h3> 
Conformément aux dispositions de l’article 1216 du code civil, les parties s’accordent 
pour qu’en cas de disparition de la personne morale du COCONTRACTANT aux 
présentes ses obligations soient transmises seulement à une personne ayant un objet 
social semblable au sien et remplissant les conditions définies à l’article L.132-3 du 
code de l’environnement. 
Le notaire soussigné rappelle aux parties que la cession doit être constatée par écrit, 
à peine de nullité. Elle ne produira ses effets à l’égard du PROPRIETAIRE que lorsqu’il 
prendra acte de cette cession ou qu’il en recevra une notification. 
<h3>10.2 – Mesures d’informations réciproques</h3> 
<h4>10.2.1 Informations régulières sur la mise en œuvre des mesures de gestion 
Des contacts réguliers, si possible annuels, seront effectués à l’initiative du 
«COCONTRACTANT » avec le « PROPRIETAIRE ».</h4> En fonction de l’état du milieu, 
ils permettront d’ajuster au mieux les modalités de gestion dans le cadre des 
engagements pris dans le contrat. Si les obligations réciproques des parties devaient 
fortement évoluer pour respecter les finalités de l’obligation réelle environnementale, 
les clauses relatives aux modalités de révision seraient mises en œuvre. 
<h4>10.2.2 Informations en cas de changement d’identité d’une des parties au contrat :</h4> 
Le PROPRIETAIRE s’engage à informer le COCONTRACTANT, dans le mois qui suit 
la signature de l’acte authentique constatant le transfert de propriété, de l’identité et 
des coordonnées postales du nouveau PROPRIETAIRE de tout ou partie des biens 
désignés à l’article 3 d’obligations réelles environnementales.
<h4>10.2.3 Informations en cas de modification dans la jouissance du bien :</h4> 
En cas de changement de situation dans les conditions de jouissance du bien, le 
PROPRIETAIRE s’engage à en informer le COCONTRACTANT dans les meilleurs 
délais. 
Dans l’hypothèse de la conclusion d’un bail rural postérieur aux présentes, le 
PROPRIETAIRE s’engage à informer le preneur à bail de l’existence de/des 
obligation(s) réelle (s) souscrite (s). 
Le COCONTRACTANT est informé de l’identité du preneur et du projet de bail rural. 
La conclusion du bail s’effectue en sa présence. Cette information sera due en cas de 
changement d’identité de l’exploitant à quelque titre que ce soit. 
<h4>10.2.4 Informations en cas d’occupations illégales sur les parcelles</h4> 
Si, à l’occasion des visites sur le site, le « COCONTRACTANT », ou les personnes 
agissant au nom et pour son compte, constate la présence d’occupations, de 
constructions illégales ou d’activités, quelle que soit leur nature, susceptible de venir 
perturber l’exécution des présentes, il est tenu d’en informer le « PROPRIETAIRE » 
dans les plus brefs délais. 
<h4>10.2.5 Informations en cas de signature d’une nouvelle ORE :</h4> 
Si le PROPRIETAIRE souhaite contracter de nouvelles obligations réelles 
environnementales il s’engage à informer le COCONTRACTANT de son souhait. Ces 
informations seront délivrées par écrit au COCONTRACTANT. 
<h2>11 – PUBLICITE FONCIERE</h2> 
L’acte sera soumis à la formalité de publicité foncière au bureau des hypothèques de
</span> 
            <div className='form-control'>                
                <Field type='text' id='bureau_hypotheques' name='bureau_hypotheques' />
                <ErrorMessage name='bureau_hypotheques' component={TextError} />
            </div>
<span>
. 
<h2>12 – DECLARATIONS FISCALES</h2> 
Il résulte des dispositions de l’article L.132-3 du code de l’environnement qu’établi en 
la forme authentique, le contrat faisant naître l’obligation réelle n’est pas passible de 
droits d’enregistrement et ne donne pas lieu à la perception de la taxe de publicité 
foncière prévus, respectivement, aux articles 662 et 663 du code général des impôts. 
<h2>13 – COPIE EXECUTOIRE</h2> 
Une copie exécutoire des présentes sera remise aux parties. 
<h2>14 – FRAIS</h2>
Les frais, droits et émoluments des présentes sont à charge du COCONTRACTANT. 
<h2>15 – MODALITES DE REVISION</h2> 
Les parties s’accordent sur le fait qu’aucune révision ne peut avoir pour effet de vider 
le contrat initial de sa substance. 
S’il advient qu’au cours de l’exécution du contrat l’une des parties 
- Rencontre une difficulté économique l’empêchant d’exécuter durablement ses 
obligations ; 
- Constate l’inefficacité des prescriptions et/ou la présence d’un nouvel élément de 
biodiversité ou fonctionnalité écologique devant faire l’objet d’une action visant à la 
maintenir, conserver, gérer ou restaurer, cette dernière 
L’une des parties pourra saisir l’autre, par écrit, d’une demande de révision. Dans les 
30 jours ouvrés suivants la réception de cette demande, les parties devront se réunir 
pour discuter d’une éventuelle révision du contrat. 
<h2>16 – RÉSILIATION DU CONTRAT</h2> 
<h3>16.1 Règlement amiable</h3> 
Si, suite à un cas de force majeure, le bien était détruit totalement ou partiellement ou 
s’il résultait de cet événement que les obligations définies aux présentes ne pouvaient 
pas être durablement mises en œuvre, une révision de l’ORE pourrait être engagée. 
En cas d’impossibilité à mettre en œuvre les obligations définies aux présentes, un 
règlement amiable entre les parties sera privilégié. 
Une résiliation serait envisagée si aucune modification du plan de gestion ou des 
obligations du propriétaire ne pouvait permettre de s’adapter à la nouvelle situation. 
En tant que besoin les parties désigneront, d’un commun accord, un médiateur. Si les 
parties ne s’accordent pas sur le choix d’un médiateur, il sera désigné par le président 
du Tribunal Judiciaire. 
Il est précisé que : 
- la mission du médiateur ne peut être exercée que par une personne physique 
jouissant du plein exercice de ses droits. 
- l’une des parties peut toujours saisir une juridiction aux fins d’obtenir une mesure 
d’instruction ou une mesure provisoire ou conservatoire. 
A défaut d’accord amiable entre les parties, chacune pourra demander la résiliation 
pour faute de la convention auprès du Tribunal Judiciaire. 
<h3>16.2 Exécution forcée en nature</h3> 
A défaut du respect des engagements par l’une des parties, l’autre partie enverra une 
mise en demeure motivée précisant les obligations de faire ou de ne pas faire à mettre 
en œuvre dans un délai de deux mois. 
Au terme de ce délai de deux mois, la partie défaillante pourra se voir appliquer des 
mesures d’exécution forcée en nature. 
En effet, le créancier d'une obligation peut, après mise en demeure, en poursuivre 
l'exécution en nature sauf si cette exécution est impossible ou s'il existe une 
disproportion manifeste entre son coût pour le débiteur de bonne foi et son intérêt pour 
le créancier. Le créancier peut aussi, dans un délai et à un coût raisonnables, faire 
exécuter lui-même l'obligation ou, sur autorisation préalable du juge, détruire ce qui a 
été fait en violation de celle-ci. Il peut demander au débiteur le remboursement des 
sommes engagées à cette fin. 
Si la remise en état n’est pas possible alors le créancier sera en droit de demander 
des dommages et intérêts et une résiliation pour faute.
16.3 Résiliation pour faute 
Le présent contrat pourra être résilié de plein droit et sans formalité judiciaire par l’une 
des parties si l’autre partie commet un manquement grave compromettant 
définitivement et irrémédiablement la biodiversité / ou les fonctions écologiques du 
site. 
Cette disposition ne limite ni n’exclut aucun droit à des dommages et intérêts au 
bénéfice de la Partie non défaillante. Elle n’exonère pas la partie défaillante de la mise 
en œuvre de sa responsabilité au titre d’autres législations. En effet, les sanctions 
prévues aux présentes au titre de l’exécution du présent contrat ne viennent en aucune 
manière remettre en question des sanctions existant du chef d’autres législations. 
<h2>17 – DOMICILE</h2> 
Pour l’exécution des présentes et de leurs suites, les parties élisent domicile en leur 
adresse respective. 
<h2>18 – MENTION LEGALE D’INFORMATION</h2> 
L’office notarial dispose d’un traitement informatique pour l’accomplissement des 
activités notariales, notamment de formalités d’actes, conformément à l’ordonnance 
n°45-2590 du 2 novembre 1945. 
Pour la réalisation de la finalité précitée, les données sont susceptibles d’être 
transférées à des tiers, notamment : 
- Les administrations ou partenaires légalement habilités tels que la Direction Générale 
des Finances Publiques, ou, le cas échéant, le livre foncier, les instances notariales, 
les organismes du notariat, les fichiers centraux de la profession notariale (Fichier 
Centrale Des Dernières Volontés, Minutier Central Electronique des Notaires, registre 
du PACS, etc). 
- Les Offices notariaux participant à l’acte, 
- Les établissements financiers concernés, 
- Les organismes de conseils spécialisés pour la gestion des activités notariales, 
- Le Conseil supérieur du notariat ou son délégataire, pour être transcrites dans une 
base de données immobilière, concernant les actes relatifs aux mutations d’immeubles 
à titre onéreux, en application du décret n° 2013-803 du 3 septembre 2013, 
- Les organismes publics ou privés pour des opérations de vérification dans le cadre 
de la recherche de personnalités politiquement exposées ou ayant fait l’objet de gel 
des avoirs ou sanctions, de la lutte contre le blanchiment des capitaux et le 
financement du terrorisme. Ces vérifications dont l’objet d’un transfert de données 
dans un pays situé hors de l’Union Européenne disposant d’une législation sur la 
protection des données reconnus comme équivalente par la Commission européenne. 
La communication de ces données aux tiers peut être indispensable afin de mener à 
bien l’accomplissement de cet acte. 
Les documents permettant d’établir, d’enregistrer et de publier les actes sont 
conservés 30 ans à compter de la réalisation de l’ensemble des formalités. L’acte 
authentique et ses annexes sont conservés 75 ans et 100 ans lorsque l’acte porte sur 
des personnes mineures ou majeures protégées. 
Conformément au Règlement (UE) 2016/679 du 27 avril 2016, les personnes 
concernées peuvent accéder aux données les concernant directement auprès de 
l’Office Notarial ou du Délégué à la protection des données désigné par l’Office. 
Le cas échéant, les personnes concernées peuvent également obtenir la rectification, 
l’effacement des données les concernant ou s’opposer pour motif légitime au 
traitement de ces données, hormis le cas où la réglementation ne permet pas l’exercice 
de ces droits. Toute réclamation peut être introduite auprès de la Commission 
Nationale de l’Informatique et des Libertés. 
<h2>19– CERTIFICATION D’IDENTITÉ</h2> 
Le notaire soussigné certifie que l’identité complète des parties, personnes morales, 
dénommés dans le présent acte, telle qu’elle est indiquée en tête à la suite de leur 
nom, lui a été régulièrement justifiée. 
<h2>20 – POUVOIRS</h2> 
Pour l’accomplissement des formalités de publicité foncière, les parties agissant dans 
un intérêt commun donnent tous pouvoirs nécessaires à tout notaire ou à tout clerc de 
l’office notarial dénommé en tête des présentes, à l’effet de faire dresser et signer tous 
actes complémentaires ou rectificatifs pour mettre le présent acte en concordance 
avec tous les documents hypothécaires, cadastraux ou d’état civil. 
<h2>21 – FORMALISME LIE AUX ANNEXES</h2> 
Les annexes, s’il en existe, font partie intégrante de la minute. Lorsque l’acte est établi 
sur support papier les pièces annexées à l’acte sont revêtues d’une mention constatant 
cette annexe et signée du notaire, sauf si les feuilles de l’acte et des annexes sont 
réunies par un procédé empêchant toute substitution ou addition. 
Si l’acte est établi sur support électronique, la signature du notaire en fin d’acte vaut 
également pour ses annexes. 
DONT ACTE sans renvoi 
Généré en l’office notarial et visualisé sur support électronique aux lieu, jour, mois et 
an indiqué en entête du présent acte. 
Et lecture faite, les parties ont certifié exactes les déclarations les concernant, avant 
d’apposer leur signature sur tablette numérique. 
Puis le notaire qui a recueilli l’image de leur signature manuscrite a lui-même 
signé au moyen d’un procédé de signature électronique sécurisé.
<h2>ANNEXES:</h2>
</span> 
            <div className='form-control'>              
              <Field type='text' id='annexe_contenu' name='annexe_contenu' />
              <ErrorMessage name='annexe_contenu' component={TextError} />
            </div>
           
           <button type='button' onClick={() => setFormValues(savedValues)}>
           Load saved data
            </button>
            <button type='reset'>Reset</button>
            <button type='submit' disabled={!formik.isValid || formik.isSubmitting}> Submit </button>
            

            
            </Form>
        )
      }}
    </Formik>
    )
}
export default ContractOREForm;

   

  
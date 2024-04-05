"use client";

import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";
import Loader from "@/components/loader";
import Navigation from "@/components/navigation/page";
import TopHeader from "@/components/topHeader/page";
import React, { useEffect, useState } from "react";

export default function BusinessCondition() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1400);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="min-h-[100vh] bg-white">

      <div className="lg:mt-[187px] mt-[90px] xl:px-[105px] px-[24px]">
        <p className="lg:text-[40px] text-[25px] font-semibold text-black">
          Obchodné podmienky
        </p>
        <div className="text-[#44525E] text-[12px] sm:mt-[38px] mt-[20px]">
          <p className="text-[black] font-semibold">I. Preambula</p>
          <p>
            1. Tieto všeobecné obchodné podmienky záväzne upravujú spôsob a
            podmienky prevádzkovania online aukcie na www.zentury.sk (ďalej len
            „aukcia“ alebo „online aukcia“).
          </p>
          <p>
            2. ZENTURY, s.r.o. so sídlom Piaristická 1, 949 01 Nitra, IČO 531
            487 97, zapísaná v Obchodnom registri Okresného súdu Nitra, oddiel
            Sro, vložka č. 51737/B (ďalej aj ako „ZENTURY, s.r.o.“), poskytuje
            svoje služby online aukcie plnoletým fyzickým osobám spôsobilým na
            právne úkony a právnickým osobám (ďalej len „užívatelia“).
            Užívatelia vystupujú výlučne v postavení kupujúcich (resp.
            nadobúdateľov v prípade predaja - postúpenia práva a inej majetkovej
            hodnoty).
          </p>
          <p>
            3. V postavení predávajúceho (resp. postupcu) vystupujú jednotliví
            správcovia konkurznej podstaty, ktorí speňažujú majetok zapísaný do
            príslušných súpisov majetku vedených správcom, prípadne iní
            predávajúci uvedení v predmetnej ponuke, ktorí uzavreli s ZENTURY,
            s.r.o., zmluvu o spôsobe a podmienkach prevádzkovania online aukcie
            (ďalej len „predávajúci“) II. Služby
          </p>
          <p>
            ZENTURY, s.r.o. poskytuje užívateľom aukcií virtuálny obchodný
            priestor, v ktorom môžu užívatelia uskutočňovať, resp. podávať
            cenové ponuky k jednotlivým hnuteľným veciam, nehnuteľným veciam
            alebo právam a iným majetkovým hodnotám ponúkaným ZENTURY, s.r.o.
            ako sprostredkovateľom obchodu. Obchodný priestor pre užívateľov je
            vytváraný počítačovými programami, www stránkou a inštrukciami,
            ktoré za bežnej prevádzky fungujú automaticky, bez zásahov a
            kontroly zo strany ZENTURY, s.r.o.
          </p>
          <br />
          <p className="text-[black] font-semibold">III.Užívatelia</p>
          <p>
            1. Užívateľ sa zaväzuje uvádzať o sebe pri registrácií pravdivé
            údaje a poskytnúť ZENTURY, s.r.o. všetky ním požadované informácie.
            ZENTURY, s.r.o. nie je povinná kontrolovať obsah údajov zadávaných
            jednotlivými užívateľmi.
          </p>
          <p>
            1. Pokiaľ užívateľ zadá o sebe pri registrácii akýkoľvek nepravdivý
            údaj, berie na vedomie, že ZENTURY, s.r.o. nie je vo vzťahu k nemu
            žiadnym spôsobom viazaná, a že môže bez ďalšieho zdôvodnenia
            odmietnuť vykonať úkony, na ktoré by bola inak povinná, a že môže
            jednostranne zrušiť jeho registráciu, a to bez ďalších prípadných
            nárokov a náhrad. Týmto nie je dotknutý nárok na náhradu škody
            ZENTURY, s.r.o., ktorý týmto vznikol.
          </p>
          <p>
            2. Pokiaľ užívateľ hodnoverným spôsobom nepreukáže opak, platí
            domnienka, že každý úkon, vykonaný v systéme aukcií pod jeho
            registračnými údajmi vykonal užívateľ, a to slobodne a vážne, s
            úmyslom vyvolať právne následky s ktorými je vykonanie takéhoto
            právneho úkonu spojené.
          </p>
          <p>
            3. Užívatelia sa zaväzujú s primeranou starostlivosťou chrániť svoje
            prístupové údaje a berú na vedomie, že úkon vykonaný pod ich
            registračnými údajmi zaväzuje priamo ich, bez potreby dokazovania
            ich osobnej účasti na úkone. ZENTURY, s.r.o. nezodpovedá užívateľom
            za prípadné škody, ktoré vzniknú neoprávneným použitím ich
            registračného mena tretími osobami.
          </p>
          <p>
            ZENTURY, s.r.o. je oprávnená jednostranne a bez udania dôvodu zrušiť
            registráciu užívateľov, resp. konkrétnu cenovú ponuku zadanú
            užívateľom, vo vzťahu ku ktorým nadobudne podozrenie, že:
          </p>
          <p>a. budú zneužívať poskytované služby,</p>
          <p>b. nemajú plnú spôsobilosť na právne úkony,</p>
          <p>
            c. je predpoklad, že odmietnu splniť niektorú povinnosť, na ktorú sa
            registráciou alebo podaním cenovej ponuky v aukciách zaviazali,
            najmä že nezaplatia zábezpeku alebo kúpnu cenu.
          </p>
          <br />
          <p className="text-[black] font-semibold">
            IV. Ponuky v systéme online aukcií
          </p>
          <p>
            1. ZENTURY, s.r.o. prostredníctvom počítačového programu a
            vytvoreného systému spracováva cenové ponuky jednotlivých
            užívateľov, pričom s ponukami zaobchádza podľa pravidiel
            zverejnených v rámci konkrétnej on-line aukcie a/alebo zverejnených
            v obchodnom vestníku, v zmysle zákona č. 7/2005 Z. z. o konkurze a
            reštrukturalizácií v znení neskorších predpisov a v súlade s týmito
            všeobecnými obchodnými podmienkami.
          </p>
          <p>
            1. Prípadné pravidlá k danej cenovej ponuke v rámci konkrétnej
            on-line aukcie, sú uvedené priamo pri zobrazení on-line aukcie,
            pričom sú vo vzťahu k týmto všeobecným obchodným podmienkam vo
            vzťahu osobitnej úpravy voči všeobecnej úprave a majú pred
            všeobecnou úpravou prednosť.
          </p>
          <p>
            2. Prípadné pravidlá k danej cenovej ponuke zverejnenej v obchodnom
            vestníku, v zmysle zákona č. 7/2005 Z. z. o konkurze a
            reštrukturalizácií v znení neskorších predpisov, sú vo vzťahu k
            týmto všeobecným obchodným podmienkam vo vzťahu osobitnej úpravy
            voči všeobecnej úprave a majú pred všeobecnou úpravou prednosť.
          </p>
          <p>
            3. Navýšenie cenovej ponuky môže byť ohraničené minimálnou a
            maximálnou hodnotou.
          </p>
          <p>
            4. Užívateľ berie na vedomie a súhlasí s tým, že nie je oprávnený
            navýšiť svoju vlastnú ponuku opakovane v rade za sebou, pokiaľ
            nebola medzi jeho ponukami urobená cenová ponuka iného užívateľa.
          </p>
          <p>
            5. V prípade, ak je pre určitú on-line aukciu ako podmienka účasti
            vyžadované zloženie zábezpeky na úhradu kúpnej ceny, ZENTURY, s.r.o.
            schváli registráciu účastníka do určitej on-line aukcie, až po
            pripísaní zábezpeky na úhradu kúpnej ceny na príslušný účet uvedený
            ZENTURY, s.r.o. pri konkrétnej on-line aukcii (ďalej len „Účet“).
            Užívateľ berie na vedomie a súhlasí s tým, že v tomto prípade je mu
            umožnené urobiť cenovú ponuku, až po schválení jeho registrácie
            ZENTURY, s.r.o., pričom zábezpeka na úhradu kúpnej ceny musí byť
            zložená na Účte minimálne tri pracovné dni pred uplynutím
            nastaveného systémového času on-line aukcie.
          </p>
          <p>
            6. Platnosť ponuky sa riadi systémovým časom stránky www.zentury.sk,
            pričom ak bude urobená ponuka menej ako 5 minút pred koncom
            nastaveného systémového času, tak sa čas do konca aukcie predlžuje
            vždy o 5 minút.
          </p>
          <br />
          <p className="text-[black] font-semibold">
            V. Viazanosť cenovou ponuky
          </p>
          <p>
            1. Každý užívateľ, ktorý sa zúčastnil aukcie a urobil cenovú ponuku
            je viazaný svojou ponukou od okamihu jej uskutočnenia a nie je ju
            možné dodatočne odvolať (ďalej aj „kúpna cena“). Užívateľ, ktorý pre
            danú vec učinil najvyššiu cenovú ponuku je povinný uzavrieť kúpnu
            zmluvu, resp. zmluvu o prevode práva alebo inej majetkovej hodnoty
            (tzv. „rezervačnú zmluvu“) a zaplatiť danú kúpnu cenu. Pokiaľ tento
            užívateľ odmietne uzatvoriť kúpnu zmluvu, resp. zmluvu o prevode
            práva alebo inej majetkovej hodnoty a/alebo doplatiť kúpnu cenu
            (ďalej aj ako „Zmariteľ“), vzniká ZENTURY, s.r.o. nárok na zmluvnú
            pokutu (i) v prípade hnuteľnej veci alebo inej majetkovej hodnoty vo
            výške 3-násobku uskutočnenej cenovej ponuky a právo vymáhať si kúpnu
            cenu a nárok na náhradu škody s tým súvisiaci súdnou cestou (ii) v
            prípade prevodu nehnuteľnosti alebo práva na prevod nehnuteľnosti vo
            výške 4 % z cenovej ponuky uskutočnenej Zmariteľom a právo vymáhať
            si kúpnu cenu a nárok na náhradu škody s tým súvisiaci súdnou
            cestou. ZENTURY, s.r.o. v tom prípade môže osloviť s uzatvorením
            kúpnej zmluvy, resp. zmluvy o prevode práva alebo inej majetkovej
            hodnoty ďalšieho užívateľa s ďalšou najvyššou ponukou v poradí
            (ďalej len „ďalší oslovený účastník“), ktorý vstupuje do práv a
            povinností Zmariteľa uvedených v predchádzajúcej vete. ZENTURY,
            s.r.o. vzniká voči ďalšiemu oslovenému účastníkovi rovnaký nárok na
            úhradu zmluvnej pokuty v prípade, ak by nastala situácia uvedená v
            prvej vete a aj ďalší oslovený účastník by odmietol uzatvoriť kúpnu
            zmluvu, resp. zmluvu o prevode práva alebo inej majetkovej hodnoty
            a/alebo doplatiť kúpnu cenu, pričom nárok na úhradu zmluvnej pokuty
            voči Zmariteľovi jej zostáva zachovaný. Ak podľa podmienok
            zverejnených v samotnej online aukcii alebo pravidiel zverejnených v
            obchodnom vestníku, v zmysle zákona č. 7/2005 Z. z. o konkurze a
            reštrukturalizácií v znení neskorších predpisov, kúpna cena podlieha
            schváleniu príslušného orgánu v zmysle zákona č. 7/2005 Z. z. o
            konkurze a reštrukturalizácií alebo predávajúceho, užívateľ je
            oprávnený uzavrieť kúpnu zmluvu, resp. zmluvu o prevode práva alebo
            inej majetkovej hodnoty, až po udelení súhlasu príslušného
            orgánu/predávajúceho. V prípade neudelenia súhlasu príslušného
            orgánu/predávajúceho s uzavretím kúpnej zmluvy, resp. zmluvy o
            prevode práva alebo inej majetkovej hodnoty, nie je užívateľ svojou
            ponukou viazaný a nemôže si voči predávajúcemu, prípadne ZENTURY,
            s.r.o. uplatniť akékoľvek nároky.
          </p>
          <p>
            2. Kúpna cena sa uhrádza bezhotovostným prevodom alebo vkladom na
            účet uvedený v záhlaví konkrétnej kúpnej zmluvy, resp. zmluvy o
            prevode práva alebo inej majetkovej hodnoty, prípadne v hotovosti do
            pokladne subjektu uvedeného v pravidlách k danej cenovej ponuke v
            rámci konkrétnej on-line aukcie, pri dodržaní podmienok zákona č.
            394/2012 Z. z. o obmedzení platieb v hotovosti v znení neskorších
            predpisov.
          </p>
          <p>
            3. Ak bolo pre určitú on-line aukciu ako podmienka účasti v aukcii
            vyžadované zloženie zábezpeky na úhradu kúpnej ceny, zložená
            zábezpeka sa:
          </p>
          <p>
            víťaznému uchádzačovi, ktorý podpíše kúpnu zmluvu, resp. zmluvu o
            prevode práva alebo inej majetkovej hodnoty (tzv. „rezervačnú
            zmluvu“) započíta na úhradu kúpnej ceny
          </p>
          <p>
            vráti neúspešným uchádzačom najneskôr do 7 pracovných dní od
            skončenia on-line aukcie
          </p>
          <p>
            ZENTURY, s.r.o. je oprávnená na jednostranné započítanie svojich
            nárokov vyplývajúcich z týchto všeobecných obchodných podmienok, ako
            aj nárokov súvisiacich s poskytnutím služby on-line aukcie oproti
            zloženej zábezpeke na úhradu kúpnej ceny v plnej výške.
          </p>
          <br />
          <p className="text-[black] font-semibold">
            VI. a) Znenie kúpnej zmluvy – hnuteľná vec a majetok
          </p>
          <p>
            1. Užívateľ berie na vedomie a súhlasí s tým, že predmet kúpy, ktorý
            je súčasťou online aukcie sa predáva „ako stojí a leží“‘. Uhradenú
            kúpnu cenu za predmet kúpy s výnimkou bodu 2 tohto článku
            všeobecných obchodných podmienok a aj prevzatý predmet kúpy už nie
            je možné vrátiť.
          </p>
          <p>
            2. Pokiaľ z akýchkoľvek dôvodov nebude možné užívateľovi odovzdať
            predmet kúpy, predávajúci sa zaväzuje užívateľovi zaplatenú kúpnu
            cenu vrátiť bez zbytočného odkladu.
          </p>
          <p>
            3. Užívateľ berie na vedomie a súhlasí s tým, že výška ceny predmetu
            kúpy a stým spojený prevod vlastníckeho práva môže podliehať
            schváleniu príslušného orgánu/predávajúceho, podľa článku V ods. 1
            týchto všeobecných obchodných podmienok.
          </p>
          <p>
            4. Užívateľ berie na vedomie a súhlasí s tým, že kúpnu cenu uhradí v
            lehote uvedenej v danej cenovej ponuke v rámci konkrétnej on-line
            aukcie, inak platí, že je povinný ju uhradiť
          </p>
          <p>
            a. ak nie je výška ceny vyššia ako 5.000,- EUR, do 2 dní odo dňa
            obdržania správy, že sa stal víťazným účastníkom, resp. ďalším
            osloveným účastníkom,
          </p>
          <p>
            b. ak je výška ceny vyššia ako 5.000,- EUR, do 5 dní odo dňa
            obdržania správy, že sa stal víťazným účastníkom, resp. ďalším
            osloveným účastníkom, ak sa užívateľ s predávajúcim nedohodnú inak.
          </p>
          <p>
            5. Užívateľ berie na vedomie, že sa stáva úspešným záujemcom až
            uhradením celej kúpnej ceny v stanovenej lehote a uskutočnením
            cenovej ponuky vyjadruje svoj súhlas s uzatvorením kúpnej zmluvy
            nasledovného znenia (alebo znenia stanoveného predávajúcim):
          </p>
          Kúpna zmluva (PDF)
          <br />
          <br />
          <p className="text-[black] font-semibold">
            VII. b) Zmluva o prevode nehnuteľností, resp. práva alebo inej
            majetkovej hodnoty
          </p>
          <p>
            1. Užívateľ berie na vedomie a súhlasí s tým, že „nehnuteľnosť“,
            resp. „právo“ alebo "iná majetková hodnota", ktorá je súčasťou
            online aukcie sa predáva „ako stojí a leží“. Uhradenú cenu za prevod
            nehnuteľnosti, resp. práva alebo inej majetkovej hodnoty s výnimkou
            bodu 2 tohto článku všeobecných obchodných podmienok a aj za
            prevzatú nehnuteľnosť, resp. právo alebo inú majetkovú hodnotu, už
            nie je možné vrátiť.
          </p>
          <p>
            2. Pokiaľ z dôvodov na strane predávajúceho nebude možné na
            užívateľa previesť nehnuteľnosť, resp. právo alebo majetkovú
            hodnotu, predávajúci sa zaväzuje užívateľovi zaplatenú cenu vrátiť
            bez zbytočného odkladu, ak sa predávajúci s užívateľom nedohodnú
            inak.
          </p>
          <p>
            3. Užívateľ berie na vedomie a súhlasí s tým, že výška ceny za
            prevod nehnuteľnosti, resp. práva a inej majetkovej hodnoty a stým
            spojený prevod vlastníckeho práva môže podliehať schváleniu
            predávajúceho podľa týchto všeobecných obchodných podmienok.
          </p>
          <p>
            4. Užívateľ berie na vedomie, že uskutočnením cenovej ponuky je
            povinný uzavrieť zmluvu o prevode práva, tzv. „rezervačnú zmluvu k
            nehnuteľnosti“ v lehote najneskôr do 3 pracovných dní odo dňa
            obdržania správy, že sa stáva víťazným účastníkom, resp. ďalším
            osloveným účastníkom a zmluvu o prevode nehnuteľnosti, resp. inej
            majetkovej hodnoty podľa povahy daného majetku (napr.: zmluva o
            prevode nehnuteľnosti, zmluva o postúpení pohľadávky) v lehote
            uvedenej v rezervačnej zmluve.
          </p>
          <p>
            5. Rezervačná zmluva podľa bodu 4. tohto článku všeobecných
            obchodných podmienok, bude obsahovať ustanovenia o kúpnej cene za
            nehnuteľnosť, resp. inú majetkovú hodnotu vo výške ponuky urobenej
            užívateľom, ktorý bol označený ako víťazný účastník, resp. ďalší
            oslovený účastník, ako aj údaj o výške zábezpeky na úhradu kúpnej
            ceny, ak táto nebola vyžadovaná už ako podmienka účasti v rámci
            konkrétnej on-line aukcie. Zábezpeku na úhradu kúpnej ceny vo výške
            4% z kúpnej ceny, maximálne však vo výške 15.000 EUR, je takýto
            účastník povinný uhradiť najneskôr v deň uzavretia rezervačnej
            zmluvy spôsobom a subjektu uvedeným v rezervačnej zmluve.
          </p>
          <p>
            6. Užívateľ berie na vedomie, že vypracovanie zmlúv podľa bodu 4.
            tohto článku všeobecných obchodných podmienok v zhode s povahou
            danej nehnuteľnosti a spôsobom úhrady kúpnej ceny, zabezpečí
            spoločnosť ZENTURY, s.r.o. – IČO: 53148797, so sídlom: Piaristická
            1, 949 01 Nitra, pričom užívateľ ako víťazný účastník, znáša všetky
            náklady súvisiace s registráciou jeho vlastníckeho práva (napr.
            správny poplatok za vklad vlastníckeho práva do katastra, atď.).
          </p>
          <p>
            7. Užívateľ berie na vedomie, že sa stáva úspešným záujemcom až
            uhradením celej zábezpeky na úhradu kúpnej ceny v stanovenej lehote
            a uskutočnením cenovej ponuky vyjadruje svoj súhlas s uzatvorením
            rezervačnej zmluvy nasledovného znenia (alebo znenia stanoveného
            predávajúcim):
          </p>
          Znenie rezervačnej zmluvy (PDF)
          <br />
          <br />
          <p className="text-[black] font-semibold">
            VII. Ochrana osobných údajov
          </p>
          <p>
            1. Užívatelia berú na vedomie, že ich údaje vyžadované pri
            registrácií a v súvislosti s používaním systému online aukcií budú
            spracovávané automatickým systémom.
          </p>
          <p>
            2. ZENTURY, s.r.o. prehlasuje, že údaje o užívateľoch spracúva
            dôverne a len na účely prevádzkovania systému online aukcií.
          </p>
          <p>
            3. Užívateľom poskytnuté údaje budú použité len v súlade s týmito
            všeobecnými obchodnými podmienkami, pre overenie totožnosti
            užívateľa a na vyhotovenie kúpnej zmluvy, resp. zmluvy o prevode
            nehnuteľnosti, práva alebo inej majetkovej hodnoty či iných listín
            potrebných na prevod vlastníckeho práva k predmetu kúpy (ďalej spolu
            aj ako „zmluva“).
          </p>
          <p>
            4. Užívateľ týmto vyhlasuje, že je oboznámený s poučením o jeho
            právach v zmysle týchto všeobecných obchodných podmienok a že sú
            jeho údaje spracúvane na základe ust. § 13 ods. 1 písm. b) zákona č.
            18/2018 Z.z. o ochrane osobných údajov a o zmene a doplnení
            niektorých
          </p>
          <p>
            5. Užívateľ týmto vyhlasuje, že berie na vedomie nasledovné poučenie
            v súvislosti so spracúvaním osobných údajov:
          </p>
          <p>
            Užívatelia sa môžu obracať so svojimi pripomienkami a žiadosťami
            týkajúcimi sa spracúvania osobných údajov na pána JUDr. PaedDr.
            Štefan Palatický, PhD., MA., LL.D , a to písomnou formou na adresu
            sídla ZENTURY, s.r.o. alebo e-mailom na adresu: zentury@zentury.sk,
            prípadne telefonicky na tel. čísle: +421 37/381 12 73.
          </p>
          <p>
            Poskytovanie osobných údajov je zmluvnou požiadavkou, ktorá je
            potrebná na uzatvorenie zmluvy. V prípade, že užívateľ neposkytne
            svoje osobné údaje, nie je možné uzatvoriť zmluvu.
          </p>
          <p>
            Doba spracúvania osobných údajov na vyššie uvedený účel je obmedzená
            dobou trvania zmluvy uvedenej v predošlej vete.
          </p>
          <p>
            Užívateľ má právo na prístup k svojim údajom. Na základe žiadosti
            užívateľa vystaví ZENTURY, s.r.o. potvrdenie o tom, či sa spracúvajú
            osobné údaje užívateľa, ktoré sa ho týkajú. Pokiaľ ZENTURY, s.r.o.
            tieto údaje spracúva, vystaví na základe žiadosti kópiu týchto
            osobných údajov užívateľa. Vystavenie prvej kópie je bezplatné. Za
            akékoľvek ďalšie kópie, o ktoré užívateľ požiada, bude predávajúci
            účtovať poplatok zodpovedajúci administratívnym nákladom, ktoré mu s
            vystavením kópie vzniknú. Pokiaľ užívateľ požiada o informácie
            formou elektronických prostriedkov, budú jej poskytnuté v bežne
            používanej elektronickej podobe, a to formou e-mailu, pokiaľ
            nepožiada o iný spôsob. Ak ZENTURY, s.r.o. takéto osobné údaje
            spracúva, užívateľ má právo získať prístup k týmto osobným údajom a
            informácie o účele spracúvania osobných údajov, kategórii
            spracúvaných osobných údajov, identifikácii príjemcu alebo o
            kategórii príjemcu, ktorému boli alebo majú byť osobné údaje
            poskytnuté, najmä o príjemcovi v tretej krajine alebo o
            medzinárodnej organizácii, ak je to možné, dobe uchovávania osobných
            údajov; ak to nie je možné, informáciu o kritériách jej určenia,
            práve požadovať od predávajúceho opravu osobných údajov týkajúcich
            sa užívateľa, ich vymazanie alebo obmedzenie ich spracúvania, alebo
            o práve namietať spracúvanie osobných údajov, práve podať návrh na
            začatie konania Úradu na ochranu osobných údajov, zdroji osobných
            údajov, ak sa osobné údaje nezískali od užívateľa, existencii
            automatizovaného individuálneho rozhodovania vrátane profilovania (v
            týchto prípadoch poskytne ZENTURY, s.r.o. užívateľovi informácie
            najmä o použitom postupe, ako aj o význame a predpokladaných
            dôsledkoch takého spracúvania osobných údajov pre užívateľa).
          </p>
          <p>
            Užívateľ má právo na opravu osobných údajov, pokiaľ o nej
            predávajúci eviduje nesprávne osobné údaje. Zároveň má ZENTURY,
            s.r.o. právo na doplnenie neúplných osobných údajov. ZENTURY, s.r.o.
            vykoná opravu, prípadne doplnenie osobných údajov bez zbytočného
            odkladu po tom, čo ho užívateľ požiada.
          </p>
          <p>
            Užívateľ má právo na vymazanie osobných údajov, ktoré sa jej týkajú,
            za predpokladu, že:
          </p>
          <p>a. osobné údaje už nie sú potrebné na účel plnenia zmluvy,</p>
          <p>b. užívateľ namieta voči spracúvaniu osobných údajov,</p>
          <p>c. osobné údaje sa spracúvali nezákonne,</p>
          <p>
            d. je dôvodom pre výmaz splnenie povinnosti zákona, osobitného
            predpisu alebo medzinárodnej zmluvy, ktorou je Slovenská republika
            viazaná.
          </p>
          <p>
            Užívateľ nebude mať právo na výmaz osobných údajov za predpokladu,
            že je ich spracúvanie potrebné:
          </p>
          <p>a. na uplatnenie práva na slobodu prejavu a na informácie;</p>
          <p>
            b. na splnenie povinnosti podľa zákona, osobitného predpisu alebo
            medzinárodnej zmluvy, ktorou je Slovenská republika viazaná, alebo
            na splnenie úlohy realizovanej vo verejnom záujme alebo pri výkone
            verejnej moci zverenej prevádzkovateľovi,
          </p>
          <p>c. z dôvodov verejného záujmu v oblasti verejného zdravia,</p>
          <p>
            d. na účely archivácie vo verejnom záujme, na účely vedeckého alebo
            historického výskumu či na štatistické účely, pokiaľ je
            pravdepodobné, že právo na výmaz znemožní alebo závažným spôsobom
            sťaží dosiahnutie cieľov takéhoto spracúvania, alebo
          </p>
          <p>
            e. na preukazovanie, uplatňovanie alebo obhajovanie právnych
            nárokov.
          </p>
          <p>
            ZENTURY, s.r.o. vykoná výmaz osobných údajov užívateľ na základe
            žiadosti, a to bez zbytočného odkladu po tom, čo vyhodnotí, že
            žiadosť užívateľa je dôvodná.
          </p>
          <p>
            Užívateľ má právo na obmedzenie spracúvania osobných údajov, pokiaľ:
          </p>
          <p>
            a. napadne správnosť osobných údajov námietkou podľa bodu 5., a to
            počas obdobia umožňujúceho ZENTURY, s.r.o. overiť správnosť osobných
            údajov;
          </p>
          <p>
            b. spracúvanie je protizákonné a užívateľ žiada namiesto výmazu
            osobných údajov obmedzenie ich použitia;
          </p>
          <p>
            c. ZENTURY, s.r.o. už nepotrebuje osobné údaje na účel spracúvania,
            ale potrebuje ich užívateľ na preukázanie, uplatňovanie alebo
            obhajovanie právnych nárokov;
          </p>
          <p>
            d. užívateľ namietala voči spracúvaniu osobných údajov na základe
            oprávneného nároku ZENTURY, s.r.o., a to až do overenia, či
            oprávnené dôvody na strane ZENTURY, s.r.o. prevažujú nad oprávnenými
            dôvodmi užívateľa.
          </p>
          <p>
            Pokiaľ užívateľ žiada o obmedzenie spracúvania jeho osobných údajov,
            ZENTURY, s.r.o. nebude s dotknutými údajmi vykonávať žiadne
            spracovateľské operácie, okrem uchovávania, bez súhlasu užívateľa.
          </p>
          <p>
            Užívateľ bude predávajúcim informovaný, pokiaľ bude obmedzenie
            spracúvania týchto údajov zrušené.
          </p>
          <p>
            Užívateľ má právo na prenosnosť údajov, čo znamená získanie osobných
            údajov, ktoré poskytol ZENTURY, s.r.o., pričom má právo preniesť
            tieto údaje ďalšiemu prevádzkovateľovi v štruktúrovanom, bežne
            používanom a strojovo čitateľnom formáte za predpokladu, že osobné
            údaje boli získané na základe súhlasu užívateľa alebo na základe
            zmluvy a ich spracovanie prebieha formou automatizovaných
            prostriedkov.
          </p>
          <p>
            Užívateľ má právo kedykoľvek namietať voči spracúvaniu jeho osobných
            údajov z dôvodov týkajúcich sa jeho konkrétnej situácie. Užívateľ
            nemôže namietať spracúvanie jeho osobných údajov ak:
          </p>
          <p>
            a. je spracúvanie osobných údajov nevyhnutné na plnenie úlohy z
            dôvodov verejného záujmu,
          </p>
          <p>
            b. sa osobné údaje spracúvajú na vedecký účel, účel historického
            významu alebo štatistický účel.
          </p>
          <p>
            Užívateľ má právo namietať spracúvanie osobných údajov, ktoré sa ho
            týkajú, na účel priameho marketingu vrátane profilovania v rozsahu,
            v akom súvisí s priamym marketingom. Pokiaľ užívateľ namietne
            spracúvanie osobných údajov na účely priameho marketingu, jeho
            osobné údaje predávajúci nemôže ďalej spracúvať.
          </p>
          <p>
            ZENTURY, s.r.o. doručenú námietku v primeranom čase posúdi. ZENTURY,
            s.r.o. nesmie ďalej spracúvať osobné údaje, ak nepreukáže nevyhnutné
            oprávnené záujmy na spracúvanie osobných údajov, ktoré prevažujú nad
            právami alebo záujmami užívateľa, alebo dôvody na uplatnenie
            právneho nároku.
          </p>
          <p>
            Užívateľ má právo podať návrh na začatie konania Úradu na ochranu
            osobných údajov Slovenskej republiky, pokiaľ sa domnieva, že boli
            porušené jeho práva v oblasti ochrany osobných údajov.
          </p>
          <p>
            Užívateľ sa zaväzuje akceptovať e-maily a telefonické hovory od
            ZENTURY, s.r.o. v súvislosti s aukciami, o ktoré prejavil záujem.
          </p>
          <br />
          <p className="text-[black] font-semibold">
            VIII. Zodpovednosť za škodu a záruky
          </p>
          <p>
            Užívatelia berú na vedomie, že na základe súčasného stavu techniky
            nie je možné skonštruovať bezchybné počítačové programy a systémy
            pre automatické spracovanie údajov.
          </p>
          <p>
            ZENTURY, s.r.o. neručí za nepretržitú prevádzku systému online
            aukcií, za dostupnosť svojich služieb a ich bezchybnosť.
          </p>
          <p>
            ZENTURY, s.r.o. nenesie zodpovednosť za škody vzniknuté v dôsledku
            technických porúch, problémov siete internet a pripojenia do nej,
            ani za synchronizáciu skutočného času so systémovým časom online
            aukcií.
          </p>
          <p>
            ZENTURY, s.r.o. nezodpovedá za ušlý zisk, súvisiace, nepriame a
            ďalšie škody. Užívateľ nie je oprávnený domáhať sa náhrady škody z
            obchodu, ktorý sa neuskutočnil z dôvodov na strane ZENTURY, s.r.o.
          </p>
          <p>
            Užívatelia nemajú nárok na náhradu nákladov spojených s účasťou v
            online aukcii.
          </p>
          <br />
          <p className="text-[black] font-semibold">
            XI. Prehlásenie užívateľa
          </p>
          <p>Užívateľ prehlasuje, že</p>
          <p>je plne spôsobilý na právne úkony,</p>
          <p>
            si je vedomý dôsledkov svojho konania pri používaní systémov online
            aukcií,
          </p>
          <p>
            si všeobecné obchodné podmienky pozorne prečítal, porozumel ich
            obsahu a bez výhrad s nimi súhlasí a bude sa nimi riadiť,
          </p>
          <p>
            jeho úkony pri používaní systému online aukcií sú považované za
            vykonané slobodne a vážne.
          </p>
          <br />
          <p className="text-[black] font-semibold">
            IX. Záverečné ustanovenia
          </p>
          <p>
            Pri posudzovaní obsahu jednotlivých právnych úkonov a ich výklade sú
            rozhodnými v prvom rade zverejnenia správcu v obchodnom vestníku,
            podmienky určené a zverejnené pri konkrétnej on-line aukcii a
            následne tieto všeobecné obchodné podmienky.
          </p>
          <p>
            Vzťahy medzi ZENTURY, s.r.o., predávajúcim a užívateľmi sa spravujú
            všeobecne záväznými právnymi predpismi Slovenskej republiky, najmä
            ust. § 281 a nasl. zákona č. 513/1991 Zb. Obchodný zákonník o
            obchodnej verejnej súťaži a týmito všeobecnými obchodnými
            podmienkami, bez ohľadu na miesto kde sa nachádza užívateľ alebo
            jeho štátnu príslušnosť, miesto pripojenia alebo umiestnenie servera
            online aukcií.
          </p>
          <p>
            Na riešenie prípadných sporov, vzniknutých v súvislosti s používaním
            Aukcií je príslušný všeobecný súd Slovenskej republiky.
          </p>
          <p>ZENTURY, s.r.o.</p>
        </div>
      </div>

    </div>
  );
}

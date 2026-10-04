<div align="center">

# 🩺 MedRicerca

### Farmaci e malattie nella letteratura medica, in italiano

**PWA gratuita · Nessuna registrazione · Nessun backend · Nessuna pubblicità**

[![Versione](https://img.shields.io/badge/versione-5.7-22c2a0?style=flat-square)](#)
[![PWA](https://img.shields.io/badge/PWA-installabile-0b5d6b?style=flat-square)](#)
[![Licenza](https://img.shields.io/badge/licenza-uso%20personale-lightgrey?style=flat-square)](#)

[**🔗 Apri l'app**](#) · [Cosa fa](#-cosa-fa) · [Come funziona](#-come-funziona) · [Fonti](#-fonti-interrogate) · [Installazione](#-installazione) · [Avvertenza](#️-avvertenza)

</div>

---

## 📖 Cos'è

**MedRicerca** è una Progressive Web App (PWA) che permette di cercare un **farmaco** o una **malattia** direttamente dall'italiano, confrontare più studi tra loro e ottenere risultati da alcune delle principali banche dati mediche mondiali, con abstract tradotti automaticamente.

Nasce per rispondere a un problema semplice: la letteratura medica è quasi tutta in inglese, sparsa su più siti, e ognuno con la propria interfaccia. MedRicerca la raccoglie in un unico posto, in italiano, gratis.

> 🏥 App creata da **Miki**, sviluppata con l'assistenza di **Claude** (Anthropic) e **ChatGPT**.

---

## 🔍 Cosa fa

| Funzione | Descrizione |
|---|---|
| 🌐 **Ricerca multi-fonte** | Interroga in parallelo PubMed, Europe PMC, ClinicalTrials.gov e openFDA, fino a 30 risultati per fonte |
| 🇮🇹 **Traduzione automatica** | Scrivi in italiano, l'app traduce e cerca in inglese |
| 💊 **Riconoscimento farmaci** | Un nome commerciale italiano (es. *Moment*) viene ricondotto al principio attivo (*ibuprofene*) tramite l'anagrafica AIFA, con RxNorm come supporto |
| ⚖️ **Confronto fino a 4 studi** | Seleziona più risultati e confrontali affiancati: fonte, anno, tipo di evidenza, autori, open access, DOI e abstract |
| 🏷️ **Tipo di evidenza** | Un'etichetta indicativa (RCT, Review, Meta-analisi, Osservazionale...) riconosciuta dai dati disponibili, quando possibile |
| 🈺 **Abstract tradotti** | Traduci titolo e riassunto di ogni articolo con un tocco |
| 🎚️ **Filtri avanzati** | Anno, tipo di studio, open access, presenza di abstract, ordinamento |
| 📁 **Preferiti in cartelle** | Organizza gli articoli salvati in cartelle personalizzate (es. Neurologia, Cardiologia): crea, rinomina, elimina, riordina o sposta un articolo da una cartella all'altra |
| 📝 **Note personali** | Aggiungi una nota privata a ogni articolo salvato, modificabile o cancellabile in ogni momento |
| 🔎 **Cerca nei Preferiti** | Trova rapidamente un articolo salvato cercando tra titolo, autori, rivista e note, con i risultati evidenziati |
| 🖨️ **Stampa e Salva PDF** | Ogni articolo si può stampare o salvare come PDF in una versione impaginata e leggibile |
| 📤 **Esportazione** | Condividi un articolo o scaricalo in formato `.ris` per Zotero/Mendeley |
| 🎨 **Personalizzazione** | Temi a gradiente, tema chiaro/scuro, dimensione del testo |
| 🔙 **Navigazione Android** | Il tasto Indietro del telefono chiude il dettaglio o il confronto aperti, invece di uscire dall'app |
| 📴 **Offline-ready** | Installabile come app; interfaccia, Preferiti, Cronologia e articoli già visti restano disponibili offline — una ricerca nuova richiede sempre connessione |

---

## 📁 Preferiti in cartelle

Quando salvi un articolo, MedRicerca chiede in quale cartella metterlo: puoi scegliere una cartella già esistente (ce ne sono alcune pronte all'uso, come Neurologia o Cardiologia) oppure crearne una nuova al volo. Dalla schermata Preferiti, il pulsante **"Gestisci cartelle"** permette di rinominare o eliminare una cartella — eliminandola, gli articoli contenuti vengono spostati in "Senza categoria", non cancellati. Ogni articolo salvato si può anche spostare in un secondo momento in un'altra cartella.

---

## ⚖️ Confronto tra studi

Seleziona fino a **4 risultati** con la casella su ogni scheda: comparirà una barra con il numero di studi scelti e il pulsante **Confronta**. Si apre una tabella affiancata con fonte, anno, tipo di evidenza, autori, open access, DOI e disponibilità dell'abstract. Il titolo di ogni studio nella tabella è cliccabile: chiude il confronto e apre direttamente la scheda completa.

Il confronto descrive i dati disponibili, non stabilisce quale studio sia "migliore".

---

## 🏷️ Tipo di evidenza

Quando i dati lo permettono, ogni scheda mostra un'etichetta indicativa: **RCT**, **Review**, **Revisione sistematica**, **Meta-analisi**, **Osservazionale**, **Studio clinico** o **Scheda farmaco**. È una classificazione euristica, ricavata dai dati disponibili: non sostituisce la lettura dell'articolo originale.

---

## 🖨️ Stampa e Salva PDF

Nel dettaglio di un articolo, i pulsanti **Stampa** e **Salva PDF** aprono una versione impaginata, pensata per la lettura su carta: titolo, dati della fonte, abstract (tradotto, se stai leggendo la traduzione) e un richiamo all'avvertenza medica. "Salva PDF" usa la finestra di stampa del dispositivo, da cui si sceglie "Salva come PDF" invece di una stampante.

---

## ⚙️ Come funziona

```
Tu scrivi           L'app traduce         Cerca in parallelo su
"mal di testa"  →    "headache"      →    4 banche dati mediche
                                                    │
                                                    ▼
                                     Risultati raggruppati per fonte,
                                     con filtri, confronto, traduzione
```

1. **Scrivi** un farmaco o una malattia, anche in italiano.
2. Scegli la modalità: **Tutto** · **Farmaco** · **Malattia**.
3. L'app traduce il termine (modificabile a mano) e lancia la ricerca.
4. I risultati arrivano per fonte, con filtri per affinare e l'etichetta del tipo di evidenza quando disponibile.
5. Apri un articolo per leggere l'abstract, tradurlo, salvarlo in una cartella, stamparlo o condividerlo — oppure selezionane fino a 4 per confrontarli.

Tutto avviene **nel browser**: nessun server proprietario, nessun dato personale raccolto. Preferiti, cronologia e impostazioni restano solo sul tuo dispositivo.

---

## 🗂️ Fonti interrogate

| Fonte | Cosa offre |
|---|---|
| **PubMed** | Il più grande archivio di letteratura biomedica al mondo |
| **Europe PMC** | Articoli scientifici, spesso a testo completo |
| **ClinicalTrials.gov** | Studi clinici in corso e conclusi |
| **openFDA + RxNorm** | Schede dei farmaci e riconoscimento del principio attivo |
| **AIFA – Anagrafica farmaci** | Elenco dei medicinali autorizzati in Italia: riconosce i nomi commerciali italiani (es. *Moment* → *ibuprofene*). Copia salvata nell'app, dati [AIFA](https://www.aifa.gov.it/liste-dei-farmaci) con licenza CC-BY 4.0 |

Per fonti a pagamento o senza accesso libero (**Embase**, **Cochrane**, **AIFA**, **SNLG**) l'app fornisce un collegamento diretto alla ricerca sul loro sito.

---

## 🈺 Traduzione

Titolo e abstract si traducono con un tocco. Quando il browser offre un traduttore integrato (Chrome desktop), viene usato quello, in locale. Se non è disponibile, l'app passa a **MyMemory**, un servizio di traduzione online: in quel caso il testo tradotto viene inviato a un servizio esterno per essere elaborato. Il testo originale resta sempre raggiungibile con un tocco, e una nota lo ricorda ogni volta che è attiva una traduzione.

---

## 📲 Installazione

MedRicerca è una PWA: si installa come un'app nativa, senza passare da nessuno store.

- **Android (Chrome)** → menu `⋮` → *Installa app*
- **iPhone/iPad (Safari)** → `Condividi` → *Aggiungi a Home*
- **Desktop (Chrome/Edge)** → icona di installazione nella barra degli indirizzi

Una volta installata, il tasto Indietro del telefono chiude il dettaglio o il confronto aperti invece di uscire dall'app, e funziona anche offline per i contenuti già consultati.

---

## 🛠️ Stack tecnico

- **HTML + CSS + JavaScript vanilla** — nessun framework, nessuna build
- **Service Worker** — cache offline (inclusa l'anagrafica AIFA) e aggiornamenti automatici
- **IndexedDB / localStorage** — dati salvati solo in locale
- **`farmaci-it.json`** — elenco compatto nome commerciale → principio attivo, ricavato dall'Anagrafica farmaci AIFA
- Nessuna chiave API richiesta, nessun costo di gestione

---

## ⚠️ Avvertenza

**MedRicerca è uno strumento di consultazione, non un dispositivo medico.**
Le informazioni mostrate provengono da banche dati pubbliche e da traduzioni automatiche: possono contenere imprecisioni, specie nella terminologia tecnica. Anche la classificazione del tipo di evidenza è indicativa, non una valutazione della qualità metodologica dello studio.

> Non sostituisce in alcun modo il parere di un medico o di un farmacista. Trovare uno studio tra i risultati non significa che il trattamento descritto sia efficace, sicuro o adatto a una persona specifica. In caso di dubbi sulla salute, rivolgersi sempre a un professionista sanitario.

---

<div align="center">

Fatto con 🩺 da **Miki** · sviluppato con **Claude** e **ChatGPT**

</div>

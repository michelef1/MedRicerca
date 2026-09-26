<div align="center">

# 🩺 MedRicerca

### Farmaci e malattie nella letteratura medica, in italiano

**PWA gratuita · Nessuna registrazione · Nessun backend · Nessuna pubblicità**

[![Versione](https://img.shields.io/badge/versione-2.1-22c2a0?style=flat-square)](#)
[![PWA](https://img.shields.io/badge/PWA-installabile-0b5d6b?style=flat-square)](#)
[![Licenza](https://img.shields.io/badge/licenza-uso%20personale-lightgrey?style=flat-square)](#)

[**🔗 Apri l'app**](#) · [Cosa fa](#-cosa-fa) · [Come funziona](#-come-funziona) · [Fonti](#-fonti-interrogate) · [Installazione](#-installazione) · [Avvertenza](#️-avvertenza)

</div>

---

## 📖 Cos'è

**MedRicerca** è una Progressive Web App (PWA) che permette di cercare un **farmaco** o una **malattia** direttamente dall'italiano e ottenere risultati da alcune delle principali banche dati mediche mondiali, con abstract tradotti automaticamente.

Nasce per rispondere a un problema semplice: la letteratura medica è quasi tutta in inglese, sparsa su più siti, e ognuno con la propria interfaccia. MedRicerca la raccoglie in un unico posto, in italiano, gratis.

> 🏥 App creata da **Miki**, sviluppata con l'assistenza di **Claude** (Anthropic).

---

## 🔍 Cosa fa

| Funzione | Descrizione |
|---|---|
| 🌐 **Ricerca multi-fonte** | Interroga in parallelo più banche dati mediche con un'unica ricerca |
| 🇮🇹 **Traduzione automatica** | Scrivi in italiano, l'app traduce e cerca in inglese |
| 💊 **Riconoscimento farmaci** | Un nome commerciale (es. *Mirapexin*) viene ricondotto al principio attivo (*pramipexolo*) |
| 🈺 **Abstract tradotti** | Traduci titolo e riassunto di ogni articolo con un tocco |
| 🎚️ **Filtri avanzati** | Anno, tipo di studio, open access, presenza di abstract, ordinamento |
| ⭐ **Preferiti e cronologia** | Salva gli articoli utili, ritrova le ricerche fatte |
| 📤 **Esportazione** | Condividi un articolo o scaricalo in formato `.ris` per Zotero/Mendeley |
| 🎨 **Personalizzazione** | Temi a gradiente, tema chiaro/scuro, dimensione del testo |
| 📴 **Offline-ready** | Installabile come app, funziona anche a connessione instabile |

---

## ⚙️ Come funziona

```
Tu scrivi           L'app traduce         Cerca in parallelo su
"mal di testa"  →    "headache"      →    5 banche dati mediche
                                                    │
                                                    ▼
                                     Risultati raggruppati per fonte,
                                     con filtri, traduzione e dettagli
```

1. **Scrivi** un farmaco o una malattia, anche in italiano.
2. Scegli la modalità: **Tutto** · **Farmaco** · **Malattia**.
3. L'app traduce il termine (modificabile a mano) e lancia la ricerca.
4. I risultati arrivano per fonte, con filtri per affinare.
5. Apri un articolo per leggere l'abstract, tradurlo, salvarlo o condividerlo.

Tutto avviene **nel browser**: nessun server proprietario, nessun dato personale raccolto. Preferiti, cronologia e impostazioni restano solo sul tuo dispositivo.

---

## 🗂️ Fonti interrogate

| Fonte | Cosa offre |
|---|---|
| **PubMed** | Il più grande archivio di letteratura biomedica al mondo |
| **Europe PMC** | Articoli scientifici, spesso a testo completo |
| **OpenAlex** | Ampio catalogo accademico multidisciplinare |
| **ClinicalTrials.gov** | Studi clinici in corso e conclusi |
| **openFDA + RxNorm** | Schede dei farmaci e riconoscimento del principio attivo |

Per fonti a pagamento o senza accesso libero (**Embase**, **Cochrane**, **AIFA**, **SNLG**) l'app fornisce un collegamento diretto alla ricerca sul loro sito.

---

## 📲 Installazione

MedRicerca è una PWA: si installa come un'app nativa, senza passare da nessuno store.

- **Android (Chrome)** → menu `⋮` → *Installa app*
- **iPhone/iPad (Safari)** → `Condividi` → *Aggiungi a Home*
- **Desktop (Chrome/Edge)** → icona di installazione nella barra degli indirizzi

Una volta installata, funziona anche offline per i contenuti già consultati.

---

## 🛠️ Stack tecnico

- **HTML + CSS + JavaScript vanilla** — nessun framework, nessuna build
- **Service Worker** — cache offline e aggiornamenti automatici
- **IndexedDB / localStorage** — dati salvati solo in locale
- Nessuna chiave API richiesta, nessun costo di gestione

---

## ⚠️ Avvertenza

**MedRicerca è uno strumento di consultazione, non un dispositivo medico.**
Le informazioni mostrate provengono da banche dati pubbliche e da traduzioni automatiche: possono contenere imprecisioni, specie nella terminologia tecnica.

> Non sostituisce in alcun modo il parere di un medico o di un farmacista. In caso di dubbi sulla salute, rivolgersi sempre a un professionista sanitario.

---

<div align="center">

Fatto con 🩺 da **Miki** · sviluppato con **Claude**

</div>

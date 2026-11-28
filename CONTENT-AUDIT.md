# Content audit — is each entry actually the first card?

Generated from the research pass. Re-runnable inputs live in the session
scratchpad; this file is the summary.

**5 of 10 batches reported (still running: 1, 4, 7, 8, 9).**

| | count | share |
|---|---|---|
| reported on | 121 of 244 cards | |
| confirmed | 39 | 32% |
| **wrong** | **55** | **45%** |
| unverifiable | 27 | 22% |

## The one bug, over and over

Almost every failure is the same shape, and it is the shape you spotted on Iron
Man: **the entry names a scene card when the character's portrait card sits far
lower in the same set.** Genie was filed at #43 when he is #6. Jasmine at #69
when she is #3. Rafiki at #72 when he is #5. Ripley at #81 when she is #9.

Three entries contradict themselves — Wonder Woman's text names #12 and then
claims #33; The Flash names #1 and claims #41; Gomez names #1 and claims #17.

A separate check settles where the fault lies. Every slab's printed card number
was compared against the number its entry claims, across all pairs where both
were legible: **zero mismatches.** The photographs are of the cards the entries
name. The entry and its picture are wrong together, which means the mistake was
made once, upstream, when the card was chosen — and that **every correction
below strands its photograph.**

## Tier C — wrong set or year (4)

The record moves: new set, new year, new photo, new price. Cannot be scripted.

| card | character | confidence | finding |
|---|---|---|---|
| `james-bond-1965-philadelphia` | James Bond | high | An earlier set exists, so this is not Bond's first trading card. Somportex of London issued 'James Bond 007 Chewing Gum' in 1964 — 60 black-and-white photo cards from Dr. No, From Russia With Love and Goldfinger, printed by Dandy Factories … |
| `star-wars-unlimited-2024` | Darth Vader | high | Darth Vader's first trading card is from 1977, not 2024: 1977 Topps Star Wars Series 1 #7 'The Villainous Darth Vader' is his lowest-numbered card in that set (#17 'Lord Vader Threatens Princess Leia!' is next), per the Series 1 checklist a… |
| `homer-simpson-1990-topps` | Homer Simpson | high | Wrong card within the set. The entry names #74 and says 'card #74 is the one that matters', but Homer appears on far lower-numbered cards in the same set. The Simpsons Archive card index attributes #5 'No more television - for all eternity!… |
| `wolverine-1986-comic-images` | Wolverine | high | Wrong card and wrong set, the exact shape of the Superman failure. (1) Within the set: Jeff Allender's checklist for the Comic Images '(Official) Marvel Universe Stickers' (1986, 77 stickers) lists Wolverine three times, at #3, #8 and #10. … |

## Tier B — right set, wrong card (36)

`setInfo` changes; the photograph and the measured price then belong to the old
card and must be re-stated or re-measured.

| card | character | confidence | finding |
|---|---|---|---|
| `genie-1993-skybox` | Genie | high | Not the lowest-numbered Genie card in the set. The 1993 SkyBox Aladdin checklist opens with a Title Card at #1 followed by a gold-panel character portrait run: 2 Aladdin, 3 Jasmine, 4 Sultan, 5 Jafar, 6 Genie, 7 Abu, 8 Iago, 9 Rajah, 10 Mag… |
| `jasmine-1993-skybox` | Princess Jasmine | high | Not the lowest-numbered Jasmine card. The checklist's portrait run puts Jasmine at #3 (after #1 Title Card and #2 Aladdin). #69 'Jasmine Plays for Time' is a late scene card; she also appears on 16, 25, 68, 85. Set size (90) and year (1993)… |
| `zoro-1999-carddass` | Roronoa Zoro | medium | Wrong card within the set. Zoro holds C06, C07 and C08 in First Stage, and the entry names C07 (power 250, rising to 400 — which does match C07 as listed). The lowest-numbered Zoro card is C06 (power 300). The entry's own text says 'Zoro ap… |
| `spongebob-2003-upper-deck` | SpongeBob SquarePants | medium | Three problems. (1) No card is named at all — the entry cites a whole 'Base Set', so the lowest-numbered SpongeBob card requirement is unmet. (2) The product described does not match the sources: Wikipedia lists two products, the 'Deep Sea … |
| `frozen-2014-topps` | Elsa | high | Wrong card within the set, and the set name is off. Cardboard Connection's checklist lists Elsa on roughly 58 cards, starting at #5 — so her lowest-numbered card is #5, not #98. #98 is correctly identified as an Elsa Glitter card (the Glitt… |
| `lorcana-2023-first-chapter` | Elsa | high | Two errors. (1) Wrong card within the set: Elsa has five cards in The First Chapter — 40 Elsa, Queen Regent (Common); 41 Elsa, Snow Queen (Uncommon); 42 Elsa, Spirit of Winter (Legendary); 109 Elsa, Ice Surfer (Common); and 207 Elsa, Spirit… |
| `gizmo-1984-topps` | Gizmo | medium | The entry names a sticker when the same set's main card run contains Gizmo at much lower numbers. The 1984 Topps Gremlins checklist is 82 base cards plus 11 stickers; base #5 is 'The Mogwai' and base #12 is 'Introducing Gizmo' (then 14, 15,… |
| `sailor-moon-1992-carddass` | Usagi Tsukino | high | Not the lowest-numbered card. Hitoshi Doi's checklist for Bandai Sailor Moon Carddas set 1 (28 cards, numbered 1-28, of which 1-4 are prism cards) lists card 1 as 'Sailor Moon' — i.e. Usagi. The entry's card 22 is listed as 'Usagi and Umino… |
| `halo-2007-masterchief` | Master Chief | medium | The entry names base #1 while its own fun fact concedes an earlier card exists — and the earlier card is real: the NS Lists checklist for 2007 Topps Halo lists promo P1 'The Master Chief (San Diego Comic Con 2007)' alongside P2 'Scarab (San… |
| `got-2012-daenerys` | Daenerys Targaryen | medium | The named card is not her earliest, by the entry's own evidence. NS Lists confirms the structure precisely (72 cards: 01-30 episode cards, 31-71 character cards, 72 checklist) and confirms #66 is 'Daenerys Targaryen' — her lowest-numbered C… |
| `mufasa-1994-skybox` | Mufasa | high | Not the lowest-numbered Mufasa card. The Series 1 checklist (#1-90) runs in story order, and #26 is titled "Mufasa Plunges into the Gorge" - lower than the claimed #28. Earlier still, #6 "Don't turn your back on me!" (the Mufasa/Scar confro… |
| `scar-1994-skybox` | Scar | high | Not the lowest-numbered Scar card. #70 "Scar" is the named-portrait card, but the story-order run earlier in the same Series 1 checklist includes #23 "Scar Sings of His Plan" and #36 "Scar Assumes the Throne", both titled for him and both l… |
| `nala-1994-skybox` | Nala | high | Not the lowest-numbered Nala card. #69 "Nala" is the named portrait, but #46 is titled "It's Nala!" and #47 "You wouldn't understand." is the same scene, both lower-numbered. Nala also appears throughout the cub sequence (roughly #9-#19: "T… |
| `rafiki-1994-skybox` | Rafiki | high | Not the lowest-numbered Rafiki card, and the error is decisive from the checklist titles alone: card #5 is "Rafiki Lifts Simba for All to See", sixty-seven cards before the claimed #72. The rest of the entry checks out: #72 is the named "Ra… |
| `timon-1994-skybox` | Timon | medium | Not the lowest-numbered Timon card. #73 "Timon" is the named portrait, but the story-order run reaches Timon and Pumbaa's introduction around #38 "Jeez, it's a lion!" (Timon's own line in the film) and #39 "Hakuna Matata", with #41 "Fresh O… |
| `pumbaa-1994-skybox` | Pumbaa | medium | Not the lowest-numbered Pumbaa card. Same problem as the Timon entry: #74 "Pumbaa" is the named portrait, but the Timon-and-Pumbaa introduction and the Hakuna Matata sequence sit at roughly #38-#42 ("Jeez, it's a lion!", "Hakuna Matata", "A… |
| `wonderwoman-1966-foldees` | Wonder Woman | high | Wrong card within the set, and the entry's own fun fact gives the game away. The 44-card checklist has Wonder Woman on #12 "Wonder Woman the Amazon" and #33 "Beautiful Wonder Woman". The entry names #33; the lowest-numbered is #12. Everythi… |
| `theflash-1966-foldees` | The Flash | high | Wrong card within the set, and again the entry refutes itself. It correctly identifies three Flash cards - #1 "Speedy Flash", #7 "Speedy Old Flash" and #41 "Flash" - then names #41. The lowest-numbered is #1. The supporting details are righ… |
| `mickey-mouse-1935-gum-inc` | Mickey Mouse | high | Three separate problems. (1) The central claim is unsafe: Pre-War Cards states Mickey's rookie card is "generally considered" to be the 1931 Wills Cinema Stars tobacco card from the UK, which it calls likely the earliest card showing both M… |
| `transformers-1985-action-cards` | Optimus Prime | medium | The entry names no card number at all, which fails the project's own rule that the lowest-numbered card be identified. TFWiki confirms the structural facts - Milton Bradley, 1985, US "Series 1" of 192 cards and the only series produced, #1-… |
| `union-arena-2023` | Gon Freecss | high | Several errors. (1) The central claim is almost certainly false: Gon Freecss dates from 1998 and Hunter x Hunter had Bandai Carddass cards from 1999 (a "Carddass Hyper Battle" series, including Gon), so a 2023 Union Arena promo cannot be hi… |
| `anna-2014-topps` | Anna | high | Two errors. (1) Card #146 is not Anna and is not a foil character card: the Cardboard Connection checklist for 2014 Topps Frozen lists '146 Elsa - Dot-to-Dot' (145-152 are the Dot-to-Dot run; 105-120 are the Holographic Foils). (2) Anna's l… |
| `olaf-2014-topps` | Olaf | high | Wrong card and an invented mechanic. Card #116 is indeed 'Olaf - Holographic Foil', but Olaf's lowest-numbered card in the 170-card set is #14 (14, 15, 17 are Olaf; 16 and 18 are Olaf with others). Also, nothing in the Cardboard Connection … |
| `despicable-me-2017-topps` | Minions | high | The central claim fails. Topps released a Minions trading card GAME in 2015 for the Minions film (base set plus Shiny/Super Shiny parallels, 36-pack boxes, UK/Europe), and Cardboard Connection notes it was 'one of two major sets made for th… |
| `freddy-krueger-1988-topps` | Freddy Krueger | high | The entry names the wrong item as the card. The 'set / card claimed' field names STICKER #5 'Do The Freddy' (the copy the project has), while the set's own card #1 is a Freddy title card - Cardboard Connection's checklist lists it verbatim … |
| `belle-1992-pro-set` | Belle | medium | #19 'Belle's Dreams' is confirmed as a real card in the 1992 Pro Set Disney's Beauty and the Beast set (75-card base run plus 10 Color-In and 10 Magic Mirror cards), but it is almost certainly not Belle's lowest-numbered card. The checklist… |
| `bart-simpson-1990-topps` | Bart Simpson | high | Wrong card within the set - the same failure mode as the Superman case. The entry presents sticker #11 as Bart's debut cardboard, but Bart appears on much lower-numbered items in the same release. Base card #4 'I'm Bart Seemp-Seau, Famous U… |
| `r2d2-1977-topps` | R2-D2 | high | Two errors. (1) Wrong card within the set: #2 'See-Threepio and Artoo-Detoo' is numerically earlier and shows R2-D2, so #3 is not his first card. The entry notices this and argues past it on the grounds that #3 is the first card 'devoted to… |
| `c3po-1977-topps` | C-3PO | high | Wrong card within the set, and the entry admits the fact that breaks it. #66 is the last card in Series 1; C-3PO appears on #2 'See-Threepio and Artoo-Detoo', 64 cards earlier, and also on #23 'See-Threepio is injured!', #34 'See-Threepio d… |
| `star-wars-1977-topps` | Luke Skywalker | high | Card identification is correct: two independent checklists confirm #1 'Luke Skywalker' heads the 66-card 1977 Topps Series 1 (blue) set and it is the lowest-numbered Luke card. The error is in the fun facts: the $268,400 sale is stale. That… |
| `princess-leia-1977-topps` | Princess Leia | medium | Card identification is correct (#5 'Princess Leia Organa', lowest-numbered Leia card; her next appearance is #10). Two fun facts fail. (1) 'Series 1 is the hardest of the five 1977 series to complete in high grade' is unsupported and contra… |
| `lion-king-1994-skybox` | Simba | medium | The entry names no card at all, only the set, so it fails the lowest-numbered-card rule on its face. On the Cardboard Connection checklist the lowest-numbered Series 1 card depicting Simba is #5 'Rafiki Lifts Simba for All to See' (#1 is th… |
| `middle-earth-1995-meccg` | Rivendell | medium | Three problems. (1) The 'character' is Rivendell, which is a place, not a character. (2) The entry identifies no card: no card name, number or type, so it cannot satisfy the lowest-card rule, and I could not confirm from a checklist that a … |
| `sonic-1993-topps` | Sonic the Hedgehog | high | Wrong card, and the set is mis-described. Two independent checklists show the 33 base cards are a 'Rogue's Gallery' of Robotnik's badniks, from #1 Buzz Bomber to #33 Grounder, each tagged with a game zone. Sonic himself does not appear on a… |
| `incredibles-2004-mrincredible` | Mr. Incredible | high | Wrong card, and the entry contradicts itself. DPT-106 is not in the 100-card base set at all: it falls in the Incredibles Memorable Scenes insert run, DPT-101 to DPT-150. The base set's Mr. Incredible card is DPT-83, the first card of The I… |
| `yogi-1961-barratt` | Yogi Bear | medium | The card identification holds: Allender's checklist gives Barratt & Co. 'T.V.'s Huckleberry Hound and Friends', 1961, 35 cards, with #3 'Artist Yogi' and the only other Yogi-titled card at #32 'Mayor Yogi', so #3 is the lowest Yogi card by … |

## Tier A — prose or fact only (15)

| card | character | confidence | finding |
|---|---|---|---|
| `iceman-1976-topps` | Iceman | medium | The central claim survives checking — Iceman is not in the 1966 Donruss Marvel Super Heroes set (which covers only Captain America, Iron Man, Daredevil, Spider-Man, Hulk and Thor across its 66 cards) and not in the 1975 Topps Comic Book Her… |
| `invisible-girl-1976-topps` | Invisible Girl | medium | Central claim survives (no Invisible Girl in the 1966 Donruss six-hero set, none in the 1975 Topps Comic Book Heroes sticker checklist; she is in the 1976 set), but a fun fact is wrong: the 1976 set does NOT contain Mr. Fantastic. Its FF re… |
| `pikachu-corocoro-1996` | Pikachu | medium | The central claim and the core dates hold: the Pikachu/Jigglypuff two-card insert came with the November 1996 issue of CoroCoro Comic, released 15 October 1996, five days before the Japanese Base Set, and sources describe the pair as the fi… |
| `greenlantern-1966-foldees` | Green Lantern | high | The card identification is CORRECT - #8 "Powerful Green Lantern" is the lower of his two cards (the other is #10 "Handsome Green Lantern"), and the set, year and title all match. But a fun fact is factually wrong: "two cards ... is more tha… |
| `monster-strike-wafer-cards` | Monster Strike | medium | The claimed year 2014 has no documented product behind it in anything I could find. The earliest Monster Strike wafer (ウエハース) release I could date is Bandai's, which went on general sale on 27 September 2016 at 120 yen, one of 28 cards per … |
| `digimon-1999-bandai` | MetalGreymon | medium | The card identification is garbled and the "first" claim is unsettled. (1) "Digi-Battle Series 1 #BO-01" conflates two different products: the entry's set field names the Japanese Digital Monster Card Game of June 1999, then shows a card fr… |
| `ripley-1979-topps` | Ellen Ripley | high | Wrong card within the set. The 84-card checklist has Ripley by name at #9, "Warrant Officer Ripley", seventy-two cards before the claimed #81. She is also on sticker #14, "Warrant Officer Ripley", and almost certainly on #16 "Crew of the No… |
| `addams-1964-gomez` | Gomez Addams | high | Wrong card within the set, and the entry says so itself in passing ("Gomez has his own title card at #1") before naming #17. Card #1 is "Gomez". The claimed #17 is a real card, "Got Any Ghostly Numbers", but it is sixteen cards later. Every… |
| `sylvester-1990-comic-ball` | Sylvester | high | Fun fact is factually wrong. Sylvester appears in THREE Academy Award-winning shorts, not five: 'Tweetie Pie' (1947), 'Speedy Gonzales' (1955) and 'Birds Anonymous' (1957). Wikipedia does support the comparative part (most of any cartoon st… |
| `donkey-2001-dart` | Donkey | high | Card data is right (#3 'Donkey' per the nslists Dart FlipCards Shrek checklist, 2001, 72-card base set), but a fun fact is wrong: the real donkey the animators used as a model, Perry, lived in Cornelius Bol Park in Palo Alto, CALIFORNIA - n… |
| `princess-fiona-2001-dart` | Princess Fiona | high | Wrong card within the set. The nslists checklist for Dart FlipCards Shrek gives #4 'Princess Fiona' - eleven numbers lower than the claimed #15. Card #15 is 'Bachelorette Number Three', which is the Magic Mirror sequence the description des… |
| `weiss-schwarz-2007` | Little Busters! | high | Year is wrong, and it contradicts the entry's own source. Wikipedia states Weiss Schwarz 'was launched in March 2008' (English release 2013). Nothing on that page identifies Little Busters! and Da Capo II as the first trial decks or dates t… |
| `anpanman-1991-carddass` | Anpanman | medium | The attribution is wrong. Carddass is a Bandai brand, not Banpresto - Japanese Wikipedia's Carddass article states it is Bandai's trading card brand, first shown at the 1988 Tokyo Toy Show with sales from June 1988, and names SD Gundam, Ult… |
| `gundam-2025-card-game` | RX-78-2 Gundam | medium | The central claim fails: this is not RX-78-2's first trading card. Japanese Wikipedia's Carddass article states that Bandai's Carddass line began sales in June 1988 and that SD Gundam was one of the three launch lines, with SD Gundam a core… |
| `ghostbusters-1988-slimer` | Slimer | medium | The card identification is right (sticker #10 is Slimer; the set is 90 base cards plus 11 stickers covering 15 properties, and the Canadian O-Pee-Chee version is 101 cards with blue backs instead of yellow, all confirmed). Two statements in… |

## Unverifiable (27)

Not passes. Honest gaps, mostly because tcdb.com, psacard.com and the Fandom
wikis all refused automated fetching during the pass, and the shared search
budget ran out partway.

- `naruto-2002-bandai` — I could not verify the key specifics from any checklist source. TCDB (the entry's own first citation) returns HTTP 403 to automated fetching; naruto.fandom.com returned HTTP 402 an
- `zelda-1999-carddass` — Nothing in this entry could be verified. No checklist source exists for a 1999 Bandai Carddass Legend of Zelda: Ocarina of Time set that I could reach: TCDB blocks automated fetchi
- `bttf-1985-marty` — The framing checks out but the card itself does not. CSGB confirms a 1985 Panini Back to the Future sticker set of 180, and confirms all four national issuers exactly as the fun fa
- `donald-duck-1938-castell` — Two problems, neither resolvable with the sources I could reach. (1) The card number cannot be supported. The cited Collecting Pepys page on Shuffled Symphonies confirms the publis
- `goofy-1938-castell` — The set itself checks out - Collecting Pepys confirms Castell Brothers, 1938 (Daily Herald advert, 23 November 1938), 45 cards covering 22 characters, red and blue packs, and lists
- `space-invaders-1985-menko` — I could not verify any part of the card identification, and the entry already concedes the point - it admits the card is documented only by Japanese marketplace listings, with no c
- `godzilla-1950s-menko` — Nothing here could be verified, and the entry is honest about that - it states the 1955 date is an estimate inferred from artwork and printing, with no date on the card. I could no
- `megaman-1992-carddass` — I could not verify the set, the year or the card. The Mega Man wiki's cards page returned HTTP 402 and no Rockman Carddass checklist surfaced anywhere else before my search budget 
- `findingnemo-2003-nemo` — Within the Artbox set the entry is right: the 72-card FilmCardz checklist has #01 "Father Marlin" and #02 "Nemo", so #02 is the lowest Nemo-titled card, and the 2003 year and 72-ca
- `wallacegromit-1995-wallace` — I could not confirm the set's year, its size, or that sticker #106 depicts Wallace. No publisher record, checklist or collector-database entry for a Merlin Wallace & Gromit album s
- `daffy-duck-1990-comic-ball` — Set, year and card number check out: the nslists Comic Ball (Series 1) checklist shows the nine-card Looney Tunes All Stars run with Bugs Bunny 1/16 and Daffy Duck 2/17, so #2 is t
- `wile-e-coyote-1990-comic-ball` — Set, year and number are right (nslists: Wile E. Coyote 4/13 in the All Stars run), and the 'Ethelbert'/'super genius' facts are standard. But the first-card claim is specifically 
- `disney-princess-1938-menier` — The product exists but the entry's specifics are not supported by its own sources. The Snow White Museum page describes the Menier promotion as 180 STICKERS (reproduced watercolour
- `hello-kitty-1976-sanrio` — No source found for a 1976 Hello Kitty playing card deck. The World of Playing Cards' Hello Kitty page documents a 2013 Sanrio deck and a 2009 Waddington's deck and does not mentio
- `spyfamily-2022-anya` — The product and its timing check out: Ensky's SPY x FAMILY Clear Card Collection Gum released 26 July 2022, 32 card types, 2 clear cards plus one soda gum stick per pack, 16 packs 
- `chewbacca-1977-topps` — Everything checkable is correct: the nslists checklist gives #44 as 'Han and Chewie shoot it out!', confirms 66 blue-bordered cards and 11 stickers, confirms #55 'Han, Chewie and L
- `demon-slayer-cards` — The set details are confirmed by Bandai's own product page: 鬼滅の刃ウエハース, released 24 February 2020, 120 yen, 26 cards including one secret. But the breakdown is 4 character cards, 9 
- `duel-masters-2002` — Wikipedia confirms the game launched in Japan in May 2002, that Wizards of the Coast developed it, that Takara published it 2002-2006, and that Wizards discontinued the English set
- `vegeta-1989-carddass` — I could not verify any specific element of this entry. What I did establish: Dragon Ball Carddass began in November 1988 (Japanese Wikipedia; the dragonball.center catalogue dates 
- `fridaythe13th-1992-jason` — The chase card itself is confirmed: the 1992 Comic Images Fangoria set has a six-card chromium insert at 1:16 packs, numbered 1C-6C as Rawhead Rex, Predator, The Terminator, Czakyr
- `sasuke-2002-bandai` — No checklist for the original Japanese Bandai Naruto Card Game could be reached this pass. The cited TCDB set page returns HTTP 403, naruto.fandom returns HTTP 402, and the slab-z 
- `sakura-2002-bandai` — Same sourcing failure as the other Naruto entries (TCDB 403, fandom 402, slab-z unreadable). Nothing confirms 忍-21 as Sakura, the 0/1 stat line, the team-ability text or the quote.
- `dora-panini-stickers` — Coleka confirms a Panini 'Dora The Explorer 2011' collection of 181 stickers released in April 2011, which supports the publisher and year of the collection named. Everything load-
- `power-rangers-1970s-gorenger` — The series date holds: Wikipedia gives Himitsu Sentai Gorenger a premiere of 5 April 1975, and Akarenger as the red leader. The card itself remains undocumented, exactly as the ent
- `gohan-1989-carddass` — The structural claims check out and the internal consistency worry resolves in the entry's favour: Carddass Hondan Part 3 (激闘!サイヤ人) runs cards 85-126 and is dated November 1989, so
- `kakashi-2002-bandai` — Same sourcing failure as the other two Naruto entries (TCDB 403, naruto.fandom 402, slab-z renders no text). Nothing confirms 忍-11 as Kakashi, the Jonin and Sharingan attributes, t
- `woody-1953-carnation` — Nothing in this entry could be verified. The Walter Lantz wiki page cited as the source returns HTTP 402 to a fetcher, and Jeff Allender's cartoon/comic-character index, cited as t

## Applied so far

- Sylvester: five Academy Awards → three (Tweetie Pie 1947, Speedy Gonzales
  1955, Birds Anonymous 1957).
- Donkey: Perry the model donkey lived at Cornelius Bol Park, Palo Alto, not in
  Pennsylvania.

**Two reported errors were rejected rather than applied.** The Green Lantern
finding quotes a sentence that is not in the entry. The Invisible Girl finding
places The Thing and the Human Torch in the 1976 set when this database's own
records put both in 1975. Agents are reliable on checklist-backed card numbers —
the Aladdin checklist was independently re-fetched and matched exactly — and
looser on prose claims.

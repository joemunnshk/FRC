# Content audit — is each entry actually the first card?

Generated from the research pass. Re-runnable inputs live in the session
scratchpad; this file is the summary.

**10 of 10 batches reported.**

| | count | share |
|---|---|---|
| reported on | 244 of 244 cards | |
| confirmed | 61 | 25% |
| **wrong** | **141** | **58%** |
| unverifiable | 42 | 17% |

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

## Tier C — wrong set or year (7)

The record moves: new set, new year, new photo, new price. Cannot be scripted.

| card | character | confidence | finding |
|---|---|---|---|
| `james-bond-1965-philadelphia` | James Bond | high | An earlier set exists, so this is not Bond's first trading card. Somportex of London issued 'James Bond 007 Chewing Gum' in 1964 — 60 black-and-white photo cards from Dr. No, From Russia With Love and Goldfinger, printed by Dandy Factories … |
| `star-wars-unlimited-2024` | Darth Vader | high | Darth Vader's first trading card is from 1977, not 2024: 1977 Topps Star Wars Series 1 #7 'The Villainous Darth Vader' is his lowest-numbered card in that set (#17 'Lord Vader Threatens Princess Leia!' is next), per the Series 1 checklist a… |
| `star-wars-ccg-1995-decipher` | Darth Vader | high | The headline framing is wrong: Decipher's was not the franchise's first card GAME. Droids\Ewoks, published by the Spanish firm Heraclio Fournier in June 1986 — 32 game cards plus an instruction card, drawn from the Droids and Ewoks cartoons… |
| `homer-simpson-1990-topps` | Homer Simpson | high | Wrong card within the set. The entry names #74 and says 'card #74 is the one that matters', but Homer appears on far lower-numbered cards in the same set. The Simpsons Archive card index attributes #5 'No more television - for all eternity!… |
| `looney-tunes-1990-comic-ball` | Bugs Bunny | high | The Nolan Ryan pairing is in the wrong set, and I verified this directly: the full Comic Ball 1 (Upper Deck, 1990) checklist contains no Nolan Ryan and no real player at all -- every subset is a cartoon story (Porky Pig and Charlie Dog, Hop… |
| `animalcrossing-2002-tomnook` | Tom Nook | high | The entry names the North American card when the Japanese one came first - and its own description contains the facts that refute its headline. Nookipedia's Doubutsu no Mori+ Card-e character list gives Japanese Series 1 as 1-001 とたけけ (K.K.… |
| `wolverine-1986-comic-images` | Wolverine | high | Wrong card and wrong set, the exact shape of the Superman failure. (1) Within the set: Jeff Allender's checklist for the Comic Images '(Official) Marvel Universe Stickers' (1986, 77 stickers) lists Wolverine three times, at #3, #8 and #10. … |

## Tier B — right set, wrong card (87)

`setInfo` changes; the photograph and the measured price then belong to the old
card and must be re-stated or re-measured.

| card | character | confidence | finding |
|---|---|---|---|
| `hermione-granger-2001-wotc` | Hermione Granger | high | WRONG CARD NUMBER - the classic error this pass is hunting. Hermione appears on TWO base-set cards: #9 Hermione Granger (Premium Holo) and #10 Hermione Granger (Premium Foil). Same art, same flavour text, same ability, same artist - two fin… |
| `aang-2006-upperdeck` | Aang | high | NO CARD NUMBER, and the set is numbered. Upper Deck's own archived spoiler list runs AME001-AME235 with no gaps, and the number is printed on the card. Aang has SIX chamber cards, AME176-181 (3 common, 2 uncommon, 1 rare), so 'the Aang cham… |
| `katara-2006-upperdeck` | Katara | high | Same defects as the Aang entry. No card number given although the set is numbered AME001-235. Katara has six chamber cards, AME182-187, lowest AME182; and she appears on a lower-numbered card in the same set, AME121 ally 'Katara, waterbende… |
| `zuko-2006-upperdeck` | Prince Zuko | high | No card number given although the set is numbered AME001-235. Zuko has six chamber cards, AME206-211, lowest AME206; and he appears on lower-numbered cards in the same set: AME129 ally 'Prince Zuko, exile' and AME171 Zenemental 'Tail of the… |
| `iroh-2006-upperdeck` | Uncle Iroh | high | No card number given although the set is numbered AME001-235. Iroh has six chamber cards, AME212-217, lowest AME212; and he appears on lower-numbered cards in the same set: AME130 ally 'Uncle Iroh, Zuko's mentor' and AME172 Zenemental 'Shoc… |
| `yugioh-bandai-1998` | Blue-Eyes White Dragon | high | The thesis is right - Bandai's 1998 set does predate Konami's OCG, and Blue-Eyes White Dragon really is card #9 (Super Rare) in a 42-card set (2 Super Rare, 4 Rare, 36 Common), appearing exactly once so the lowest-number rule is satisfied. … |
| `angry-birds-cards` | Red | medium | The card identification holds up, better than expected: E-Max's OWN official checklist PDF (recovered from the Wayback Machine) prints the character name RED and numbers the set 001-180 with Red's block first, and Allender's checklist begin… |
| `one-piece-2022-romance-dawn` | Monkey D. Luffy | high | THE CENTRAL CLAIM IS WRONG BY 23 YEARS. Luffy's first trading card is Bandai's CARDDASS HYPER BATTLE 'First Stage', released in Japan in NOVEMBER 1999 - 42 cards (36 regular + 6 holo), numbered C01-C34 and S01-S08, with C01 'Luffy' (holo, c… |
| `et-1982-topps` | E.T. | high | WRONG CARD - and the same owned-photo bias that produced the Superman failure. The set is 87 NUMBERED CARDS (1-87) plus a SEPARATELY numbered 12-sticker run, and every sticker is a crop of an existing card. Allender's sticker map states tha… |
| `fred-flintstone-monty-gum` | Fred Flintstone | high | THE CENTRAL CLAIM IS WRONG BY ABOUT SEVEN YEARS. A 1963 Flintstones card set is documented in the standard hobby checklist: 'The Flintstones', Primrose Confectionery Co. Ltd. (UK), 1963, 50 cards, about 1-3/8 x 2-5/8 inches, colour fronts w… |
| `samus-1993-amurol` | Samus Aran | high | WRONG CARD COUNT AND WRONG SET STRUCTURE. The set is 'Nintendo Game Boy (Amurol)', Amurol / Nintendo, 1993 - 14 CARDS, not 54. It is seven games at TWO cards each, not one game per card: 1-2 Dr. Mario, 3-4 Kirby's Dreamland, 5-6 Metroid II … |
| `finalfantasy-1997-cloud` | Cloud Strife | medium | The card is right but its finish is not. Allender gives 'Final Fantasy VII - Cardass Masters', Bandai, 1997, 139 numbered cards + 4 Gold prize cards + 1 promo, with #1 Cloud Strife flagged SP; the SPs (#1, #3, #4, #37) are described as HOLO… |
| `potc-2004-sparrow` | Jack Sparrow | medium | The card checks out and so does the lowest-number rule, but the series details are wrong on both halves. Coleka lists 'Pitates des caraibes 239' (their own typo) in the Video Futur Cards series, licence Pirates of the Caribbean, limited to … |
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
| `lando-calrissian-1980-topps` | Lando Calrissian | high | The card itself is right — #8 'Star File - Lando Calrissian' is his lowest number in 1980 Topps ESB Series 1 (later base cards #76, #80, #85, #109, #125) — but a fun fact is flatly false. 'Billy Dee Williams returned to the role 39 years la… |
| `peach-1989-carddass` | Princess Peach | high | Wrong card number, twice over. PSA's spec page for her solo card is titled 'Princess Peach #6' and PSA's set table lists Princess Peach at No. 6 — not #42. And #6 is not her earliest card in the set either: she appears on #5 (Luigi/Peach/To… |
| `warcraft-2006-upper-deck` | Warchief Thrall | medium | The suspected error (Thrall absent from the first set) is NOT the problem — he is in Heroes of Azeroth. The problem is that the entry names no card at all, which makes the central claim untestable as written. Warchief Thrall is card 267/361… |
| `cardfight-vanguard-2011` | Dragonic Overlord | high | Wrong set AND wrong printing — the clearest error in the batch. (1) Dragonic Overlord's first card is TD02/001 in Trial Deck 2: Dragonic Overlord, released 26 February 2011 in Japan — two weeks BEFORE Booster Set 1 (12 March 2011). The wiki… |
| `terminator-1991-impel` | The Terminator | high | Card #34 really is captioned 'Terminator' — two independent checklists agree verbatim, so the caption is not invented — but it is nowhere near the lowest card showing the T-800. Earlier cards in the published checklist include #1 'The Cybor… |
| `kermit-1978-hai` | Kermit the Frog | high | Wrong card number, and the attribution line is wrong. The 1978 Swedish 'The Muppet Show' set runs to 78 cards with blank backs, 7 per pack, produced by Dutch Gum for the Swedish market. Card #23 is indeed a Kermit card, but it is NOT the lo… |
| `donatello-1989-topps` | Donatello | medium | Structure checks out: 88 base cards plus 11 stickers (packs of 5 cards + 1 sticker), and sticker #3 IS Donatello and is the lowest Donatello sticker (1 Raphael, 2 Michaelangelo, 3 Donatello, 4 Leonardo; 5-11 are Shredder, Splinter and logos… |
| `monstersinc-2001-sulley` | Sulley | medium | The entry picks the wrong one of the two P1 promos, and its central reasoning is unverified. nslists lists both promos: 'P1 Cards Ship October (Sulley, portrait orientation)' and 'P1 Cards Ship October (Mike & Sulley, landscape)'. The entry… |
| `doctorwho-1965-dalek` | Dalek | medium | No numbered checklist for the Cadet Sweets 'Dr Who and the Daleks' set could be found anywhere (TARDIS wiki and TCDB are bot-blocked; the three cited sources carry no card numbers or titles), so #42 'Dr. Who Orders...' cannot be confirmed a… |
| `anna-2014-topps` | Anna | high | Two errors. (1) Card #146 is not Anna and is not a foil character card: the Cardboard Connection checklist for 2014 Topps Frozen lists '146 Elsa - Dot-to-Dot' (145-152 are the Dot-to-Dot run; 105-120 are the Holographic Foils). (2) Anna's l… |
| `olaf-2014-topps` | Olaf | high | Wrong card and an invented mechanic. Card #116 is indeed 'Olaf - Holographic Foil', but Olaf's lowest-numbered card in the 170-card set is #14 (14, 15, 17 are Olaf; 16 and 18 are Olaf with others). Also, nothing in the Cardboard Connection … |
| `despicable-me-2017-topps` | Minions | high | The central claim fails. Topps released a Minions trading card GAME in 2015 for the Minions film (base set plus Shiny/Super Shiny parallels, 36-pack boxes, UK/Europe), and Cardboard Connection notes it was 'one of two major sets made for th… |
| `freddy-krueger-1988-topps` | Freddy Krueger | high | The entry names the wrong item as the card. The 'set / card claimed' field names STICKER #5 'Do The Freddy' (the copy the project has), while the set's own card #1 is a Freddy title card - Cardboard Connection's checklist lists it verbatim … |
| `belle-1992-pro-set` | Belle | medium | #19 'Belle's Dreams' is confirmed as a real card in the 1992 Pro Set Disney's Beauty and the Beast set (75-card base run plus 10 Color-In and 10 Magic Mirror cards), but it is almost certainly not Belle's lowest-numbered card. The checklist… |
| `bart-simpson-1990-topps` | Bart Simpson | high | Wrong card within the set - the same failure mode as the Superman case. The entry presents sticker #11 as Bart's debut cardboard, but Bart appears on much lower-numbered items in the same release. Base card #4 'I'm Bart Seemp-Seau, Famous U… |
| `r2d2-1977-topps` | R2-D2 | high | Two errors. (1) Wrong card within the set: #2 'See-Threepio and Artoo-Detoo' is numerically earlier and shows R2-D2, so #3 is not his first card. The entry notices this and argues past it on the grounds that #3 is the first card 'devoted to… |
| `c3po-1977-topps` | C-3PO | high | Wrong card within the set, and the entry admits the fact that breaks it. #66 is the last card in Series 1; C-3PO appears on #2 'See-Threepio and Artoo-Detoo', 64 cards earlier, and also on #23 'See-Threepio is injured!', #34 'See-Threepio d… |
| `riftbound-2025-origins` | Tryndamere | high | THE RELEASE DATE IS WRONG, and the entry contradicts itself. 31 October 2025 was the ENGLISH-language release - the launch press release says Origins is 'available today in English' across North America, Latin America, EMEA and Oceania, pub… |
| `lotr-tcg-2001-decipher` | Aragorn | high | THE CENTRAL CLAIM FAILS, AND THE ENTRY CONTRADICTS ITSELF. Iron Crown Enterprises' Middle-earth Collectible Card Game, first set 'Middle-earth: The Wizards' (limited edition December 1995, 484 cards), includes an Aragorn character card - Wi… |
| `rocky-1979-topps` | Rocky Balboa | high | WRONG CARD WITHIN THE SET - the classic failure mode. Two independent numbered checklists show the 1979 Topps Rocky II set is 99 base cards (plus a 22-piece die-cut glove sticker subset), and that card #1 is 'Meet "Rocky"' - a Rocky Balboa … |
| `buzz-lightyear-1995-skybox` | Buzz Lightyear | high | WRONG CARD WITHIN THE SET. The base set is 90 cards (confirmed) and card #32 is indeed titled 'Buzz Lightyear' (confirmed), but it is not the lowest-numbered card depicting Buzz. Both checklists fetched list #5 as 'The Arrival of Buzz Light… |
| `robin-1966-topps` | Robin | medium | #2 'Robin - Boy Wonder' is confirmed as his lowest-numbered card and the image matches the described leaping portrait against a city skyline. But 'He appears on six cards across the set' is clearly wrong: a visual audit of fronts #1-#36 fro… |
| `catwoman-1966-topps` | Catwoman | medium | The entry features #27 'Sinister Smile' as the card to show while her run demonstrably opens at #25 'The Cat Woman' -- she is confirmed on #25, so under the lowest-numbered rule the entry must name #25, not #27. The '#25-#35' range is also … |
| `riddler-1966-topps` | The Riddler | medium | #36 'The Riddler' is confirmed as his lowest-numbered card (his story arc begins at #36) and the art matches the description -- a green figure crouched in the question-mark suit and domino mask against a plain dark background. The year, set… |
| `penguin-1966-topps` | The Penguin | medium | The card named as the opening of his run does not appear to depict him. #16 'The Penguin's Trap' was zoomed twice from a Heritage complete-set lot photo and shows Batman alone, falling through a yellow void -- no Penguin. His lowest-numbere… |
| `lex-luthor-1940-gum-inc` | Lex Luthor | high | The card itself is right and survives the lowest-number check: #12 does depict Luthor (a man at a control panel with a full head of orange-red hair firing an electrical ray at Superman, so the red-hair claim is confirmed), and reading the b… |
| `spock-1967-leaf` | Spock | medium | The set, year and the charming caption observation all hold -- #4 'Come In, Captain Kirk' really does picture Leonard Nimoy alone with a communicator -- but #4 is not Spock's lowest-numbered card. Card #1 'No Time For Escape' pictures Spock… |
| `kirk-1967-leaf` | Captain Kirk | high | #33 'Fight For Lithium' is correctly titled and does show Shatner solo with a phaser rifle, and the lithium/dilithium fun fact is fine -- but #33 is nowhere near Kirk's lowest-numbered card. #2 'Attempted Mutiny' pictures Kirk restraining G… |
| `disney-1935-minnie` | Minnie Mouse | medium | #38 is not the lowest-numbered Minnie card. The numbered checklist (nslists, not the cited prewarcards page, which contains only a two-line checklist for #74 and #81) shows #7 'Bad stew Mickey / Stew bad Minnie!' naming her outright, with #… |
| `disney-1935-pluto` | Pluto | medium | The central claim is unverified and several supporting claims are wrong. #1's caption is confirmed as 'Let's make Hoop-ee!' (nslists, and independently an si.com image caption), but nothing confirms Pluto is PICTURED on it -- the caption na… |
| `paw-patrol-2015-panini` | Marshall | medium | The year is wrong and the error's origin is identifiable. The cited coleka album page gives a release date of August 2016 ('2016-08-01'), and coleka's Paw Patrol collection page says it was released in 2016 with 178 stickers. The only '2015… |
| `sanji-2000-carddass` | Sanji | high | The entry's own cited checklist refutes it on three counts. (1) Sanji is NOT absent from 2nd Stage: that set (C35-C66, S09-S16, January 2000) includes #S13 Sanji, titled 料理人 (Cook), a holo -- so the premise 'the Baratie arc had not been rea… |
| `evangelion-1996-rei` | Rei Ayanami | medium | Most of the set detail is confirmed from photographs of the actual box and pack: 172 cards; 300 yen for ten (tax included, 291 pre-tax); four special cards, newly drawn, inserted one per fifteen packs; 1996; the first-printing tell (edition… |
| `harleyquinn-1993-topps` | Harley Quinn | high | The card is right but the comics history is wrong twice over. Confirmed: #36 is titled 'Harley Quinn', 'Joker's Favor' aired 11 September 1992, and #36 is the lowest-numbered card depicting her -- Series 1 runs 1-100 and Series 2 runs 101-1… |
| `mario-1989-topps-nintendo` | Mario | medium | Several problems. (1) 'before the Mario name existed' is false. Wikipedia: Mario was known as Jumpman during Donkey Kong's development, was unnamed in the Japanese launch release, called 'Jumpman' in the English instructions but 'little Mar… |
| `link-1989-topps-nintendo` | Link | high | #32 is NOT the lowest-numbered Link card in the set - the same class of error as the Superman #36 case. Jeff Allender's printed 1-33 checklist for the 1989 Topps Nintendo set contains, well below 32: #12 'Win with Link' (game tip Zelda II: … |
| `bowser-1989-topps` | Bowser | high | The card ID is defensible but BOTH fun facts are wrong. (1) The Miyamoto anecdote is reversed. MarioWiki, citing Iwata Asks and Le Monde: Miyamoto based the look on the Ox King (Gyu-Mao) from Alakazam the Great and loosely based Bowser on a… |
| `robotnik-1993-topps` | Doctor Robotnik | high | Sticker #18 is NOT the lowest-numbered Robotnik item. The tradercracks checklist for 1993 Topps Sonic the Hedgehog lists stickers #2 'Tails / Sonic / Robotnik' and #3 'Tails / Sonic / Robotnik', both far below #18 (and #30 is a second 'Beat… |
| `tails-1993-topps` | Tails | high | Sticker #11 is NOT the lowest-numbered Tails item. The tradercracks checklist shows sticker #1 is 'Sonic / Tails', and #2, #3 and #4 also name Tails; Prisms #2 and #4 show him too. #11 'Totally Tails!' is simply the first sticker built arou… |
| `pacman-1980-fleer` | Pac-Man | medium | (1) The set structure is wrong. Jeff Allender gives 54 stickers numbered '1 of 54' to '54 of 54' (36 Pac-Man/monster style, 18 'Certificate' style) AND a SEPARATE series of 28 different Rub-Off Game Cards - 82 items in total. The entry's 'T… |
| `fortnite-2019-panini` | Skull Trooper | high | (1) The entry names a PARALLEL rather than the base card. Cardboard Connection confirms Crystal Shard is a retail Mega Box parallel (2 per box, covering #101-300). By the database's own premise the first card is base #235, not the Crystal S… |
| `xmen-1976-topps-cyclops` | Cyclops | high | (1) ANGEL IS IN THE 1976 SET. Jeff Allender lists 'The Angel' and Cardboard Connection gives his caption: 'The Angel - I'm Heading South for the Winter.' So both the description ('Only two X-Men made the cut - Cyclops and Ice Man') and the … |
| `piccolo-1989-carddass` | Piccolo | medium | (1) 'The Piccolo Daimao on cards 3 and 4 of Part 1' is very likely wrong. Kanzenshuu states Set 1 runs 'from Pilaf to Piccolo Daimao' - King Piccolo is where Part 1 ENDS, so he belongs at the high numbers (roughly 35-42), not at #3/#4. drag… |
| `chopper-2001-carddass` | Tony Tony Chopper | high | An earlier Chopper card exists in the same series. Grand Line Wiki's Carddass Hyper Battle checklist lists promotional card C-J09 チョッパー, released in the Spring 2001 Akamaru Jump issue (赤マルジャンプ2001スプリング). Akamaru Jump's Spring issue ships ar… |
| `popeye-1933-orbit` | Popeye | high | #18 is nowhere near the lowest-numbered Popeye card - this is the same shape of error as the Superman #36 case. Jeff Allender's full 30-card checklist shows every title begins 'Popeye Comic...', and the bracketed subject notes list Popeye o… |
| `pinkpanther-1972-fher` | The Pink Panther | medium | One of the four cartoon titles does not exist. 'Sea? Si', Sir!' appears in neither Wikipedia's 124-short Pink Panther filmography (no title contains 'Sea' or 'Si, Sir'; the closest is Sink Pink, 1965) nor the 34-short Inspector list (1965-6… |
| `star-wars-1977-topps` | Luke Skywalker | high | Card identification is correct: two independent checklists confirm #1 'Luke Skywalker' heads the 66-card 1977 Topps Series 1 (blue) set and it is the lowest-numbered Luke card. The error is in the fun facts: the $268,400 sale is stale. That… |
| `princess-leia-1977-topps` | Princess Leia | medium | Card identification is correct (#5 'Princess Leia Organa', lowest-numbered Leia card; her next appearance is #10). Two fun facts fail. (1) 'Series 1 is the hardest of the five 1977 series to complete in high grade' is unsupported and contra… |
| `lion-king-1994-skybox` | Simba | medium | The entry names no card at all, only the set, so it fails the lowest-numbered-card rule on its face. On the Cardboard Connection checklist the lowest-numbered Series 1 card depicting Simba is #5 'Rafiki Lifts Simba for All to See' (#1 is th… |
| `middle-earth-1995-meccg` | Rivendell | medium | Three problems. (1) The 'character' is Rivendell, which is a place, not a character. (2) The entry identifies no card: no card name, number or type, so it cannot satisfy the lowest-card rule, and I could not confirm from a checklist that a … |
| `sonic-1993-topps` | Sonic the Hedgehog | high | Wrong card, and the set is mis-described. Two independent checklists show the 33 base cards are a 'Rogue's Gallery' of Robotnik's badniks, from #1 Buzz Bomber to #33 Grounder, each tagged with a game zone. Sonic himself does not appear on a… |
| `incredibles-2004-mrincredible` | Mr. Incredible | high | Wrong card, and the entry contradicts itself. DPT-106 is not in the 100-card base set at all: it falls in the Incredibles Memorable Scenes insert run, DPT-101 to DPT-150. The base set's Mr. Incredible card is DPT-83, the first card of The I… |
| `yogi-1961-barratt` | Yogi Bear | medium | The card identification holds: Allender's checklist gives Barratt & Co. 'T.V.'s Huckleberry Hound and Friends', 1961, 35 cards, with #3 'Artist Yogi' and the only other Yogi-titled card at #32 'Mayor Yogi', so #3 is the lowest Yogi card by … |

## Tier A — prose or fact only (47)

| card | character | confidence | finding |
|---|---|---|---|
| `harry-potter-2001-wotc` | Harry Potter | medium | Card data is right: #8 Harry Potter is a Premium Holo illustrated by Scott M. Fischer and is his only base-set card (Harry Hunting #23 is an Adventure card and higher-numbered anyway). Two problems elsewhere. (1) Description error: the line… |
| `tmnt-1989-topps` | Leonardo, Michelangelo, Donatello & Raphael | high | Set composition and year are right (Topps, 1989, 88 cards + 11 stickers, with contemporaneous O-Pee-Chee Canadian and Regina Ltd New Zealand printings), and no pre-1989 TMNT card product appears in any index I could reach, so the 'first eve… |
| `cars-2025-topps-chrome` | Lightning McQueen | high | THE CENTRAL CLAIM IS FLATLY FALSE, and the counter-example comes from the same manufacturer. 2023 TOPPS CHROME DISNEY 100, released 13 December 2023, is a 100-card base set that includes #95 LIGHTNING McQUEEN - plus #60 Mater and #85 Doc Hu… |
| `peanuts-1991-prosport` | Charlie Brown & Snoopy | high | WRONG PUBLISHER. Jeff Allender's checklist header for the 1991 Peanuts preview set reads 'Peanuts Preview Set / Tuff Stuff - 1991'. ProSport Specialties is the publisher of the 1992 follow-up, 'Peanuts Classics - Series 1' (200 cards) - the… |
| `venom-1988-comicimages` | Venom | medium | The central claim and nearly everything else is right - this is the only entry in the batch whose 'first card' claim I could positively confirm - but the border attribution is wrong. Spiderfan confirms the set name exactly as given ('1988 C… |
| `iceman-1976-topps` | Iceman | medium | The central claim survives checking — Iceman is not in the 1966 Donruss Marvel Super Heroes set (which covers only Captain America, Iron Man, Daredevil, Spider-Man, Hulk and Thor across its 66 cards) and not in the 1975 Topps Comic Book Her… |
| `invisible-girl-1976-topps` | Invisible Girl | medium | Central claim survives (no Invisible Girl in the 1966 Donruss six-hero set, none in the 1975 Topps Comic Book Heroes sticker checklist; she is in the 1976 set), but a fun fact is wrong: the 1976 set does NOT contain Mr. Fantastic. Its FF re… |
| `pikachu-corocoro-1996` | Pikachu | medium | The central claim and the core dates hold: the Pikachu/Jigglypuff two-card insert came with the November 1996 issue of CoroCoro Comic, released 15 October 1996, five days before the Japanese Base Set, and sources describe the pair as the fi… |
| `greenlantern-1966-foldees` | Green Lantern | high | The card identification is CORRECT - #8 "Powerful Green Lantern" is the lower of his two cards (the other is #10 "Handsome Green Lantern"), and the set, year and title all match. But a fun fact is factually wrong: "two cards ... is more tha… |
| `monster-strike-wafer-cards` | Monster Strike | medium | The claimed year 2014 has no documented product behind it in anything I could find. The earliest Monster Strike wafer (ウエハース) release I could date is Bandai's, which went on general sale on 27 September 2016 at 120 yen, one of 28 cards per … |
| `digimon-1999-bandai` | MetalGreymon | medium | The card identification is garbled and the "first" claim is unsettled. (1) "Digi-Battle Series 1 #BO-01" conflates two different products: the entry's set field names the Japanese Digital Monster Card Game of June 1999, then shows a card fr… |
| `ripley-1979-topps` | Ellen Ripley | high | Wrong card within the set. The 84-card checklist has Ripley by name at #9, "Warrant Officer Ripley", seventy-two cards before the claimed #81. She is also on sticker #14, "Warrant Officer Ripley", and almost certainly on #16 "Crew of the No… |
| `addams-1964-gomez` | Gomez Addams | high | Wrong card within the set, and the entry says so itself in passing ("Gomez has his own title card at #1") before naming #17. Card #1 is "Gomez". The claimed #17 is a real card, "Got Any Ghostly Numbers", but it is sixteen cards later. Every… |
| `dragoon-2001-beyblade-ccg` | Dragoon | medium | The card identifier 'SP-002' matches no documented card. Two real cards fit the name: promo 'PR-001 ドラグーン・ストーム' (sold in Japanese listings as a CoroCoro Comic furoku) and 'SSP-002[SSP]: (ホロ)ドラグーンストーム(プリズム)', release 2001/08/01. SP- numbers … |
| `dranzer-2001-beyblade-ccg` | Dranzer | medium | Two problems. (1) The fun fact 'Dranzer is the only one of the four bit-beasts that is a mythological creature rather than an animal' is flatly false: all four are the Chinese sacred beasts — Dranzer is Suzaku (phoenix), Dragoon is Seiryu (… |
| `driger-2001-beyblade-ccg` | Driger | medium | Number and title check out — Suruga-ya catalogues '012[レア]: デスドライガー' and '012[レア]: (ホロ)デスドライガー(銀紙版)', 分類 ベイブレードカード, release 2001/08/01 — but the foil is wrong. The foil variant is 銀紙版, SILVER foil; 'solid gold foil' and the fun fact 'printe… |
| `draciel-2001-beyblade-ccg` | Draciel | medium | Not Draciel's first card, and the card type is misdescribed. Card 182 is confirmed — '182: フォートレスディフェンス' — but it is catalogued 分類 必殺技カード (special-move card) and belongs to the 氷河の帝王 booster, release 2001/12/01, four months AFTER the base b… |
| `call-of-duty-2021-upper-deck` | Call of Duty League | medium | Three problems. (1) Category-invalid: the 'character' is 'Call of Duty League' and the entry itself says the cards show real esports professionals, not game characters — so by its own description it records no fictional character's first ca… |
| `rilakkuma-sanx-trading-cards` | Rilakkuma | medium | The 2003 date is not credible and nothing in the entry could be documented. San-X's own site puts the character's debut at September 2003 ('2003年9月登場'), so a 20-card set with a holo chase inside the same calendar year would be roughly three… |
| `gpk-1985-adambomb` | Adam Bomb | high | The central claim is sound — #8a Adam Bomb, 1985 Topps Garbage Pail Kids Original Series 1, is his first and only OS1 card — but one fun fact is backwards. 'Its partner #8b is Blasted Billy, a completely different illustration - Series 1 pr… |
| `sylvester-1990-comic-ball` | Sylvester | high | Fun fact is factually wrong. Sylvester appears in THREE Academy Award-winning shorts, not five: 'Tweetie Pie' (1947), 'Speedy Gonzales' (1955) and 'Birds Anonymous' (1957). Wikipedia does support the comparative part (most of any cartoon st… |
| `donkey-2001-dart` | Donkey | high | Card data is right (#3 'Donkey' per the nslists Dart FlipCards Shrek checklist, 2001, 72-card base set), but a fun fact is wrong: the real donkey the animators used as a model, Perry, lived in Cornelius Bol Park in Palo Alto, CALIFORNIA - n… |
| `princess-fiona-2001-dart` | Princess Fiona | high | Wrong card within the set. The nslists checklist for Dart FlipCards Shrek gives #4 'Princess Fiona' - eleven numbers lower than the claimed #15. Card #15 is 'Bachelorette Number Three', which is the Magic Mirror sequence the description des… |
| `weiss-schwarz-2007` | Little Busters! | high | Year is wrong, and it contradicts the entry's own source. Wikipedia states Weiss Schwarz 'was launched in March 2008' (English release 2013). Nothing on that page identifies Little Busters! and Da Capo II as the first trial decks or dates t… |
| `anpanman-1991-carddass` | Anpanman | medium | The attribution is wrong. Carddass is a Bandai brand, not Banpresto - Japanese Wikipedia's Carddass article states it is Bandai's trading card brand, first shown at the 1988 Tokyo Toy Show with sales from June 1988, and names SD Gundam, Ult… |
| `gundam-2025-card-game` | RX-78-2 Gundam | medium | The central claim fails: this is not RX-78-2's first trading card. Japanese Wikipedia's Carddass article states that Bandai's Carddass line began sales in June 1988 and that SD Gundam was one of the three launch lines, with SD Gundam a core… |
| `doctor-doom-1975-topps` | Doctor Doom | high | WRONG CARD - the entry names a caption that belongs to a DIFFERENT SET. Both independent checklists of the 1975 Topps Comic Book Heroes set print Doom's sticker as 'Dr. Doom - I'm Dressed to Kill!'. The caption the entry uses, 'Anyone Out T… |
| `falcon-1975-topps` | The Falcon | high | The CARD is right - both checklists print 'The Falcon - You Bet Your Bird!' and the Falcon has only one sticker in the set - but a FUN FACT IS FACTUALLY WRONG. The entry says 'Sam had no wings when he debuted in 1969; the flight harness was… |
| `doc-ock-1975-topps` | Doctor Octopus | medium | The CARD is right - both checklists print 'Dr. Octopus - I'm Just A Well Armed Crook!' and he has only ONE sticker in the set - but the DESCRIPTION contains a factual error. It calls him 'Spider-Man's oldest enemy'. Wikipedia gives Doctor O… |
| `iron-fist-1975-topps` | Iron Fist | medium | The CARD is right - both checklists list 'Iron Fist - Kung Fooey' and he has only ONE sticker in the set - and the central claim is well supported (Iron Fist did not exist in 1966, and Allender's index shows no Marvel set between 1966 and 1… |
| `metalgear-1987-snake` | Solid Snake | medium | THE CARD ITSELF IS PHOTO-CONFIRMED IN UNUSUAL DETAIL, but the entry makes an invented claim. The nintendosegajapan image shows the Famicom Metal Gear box (spine code 'KDS-ME' visible) beside a pale-lavender speckled card bearing a painted f… |
| `amongus-2021-crewmate` | Crewmate | high | MOST OF THE ENTRY IS CONFIRMED, BUT FUN FACT 2 IS FALSE. CONFIRMED: Crewmate Edition reached UK/Europe shelves 14 December 2021 (Japan/South Korea 16 December, North America 21 December - so 14 December really is the earliest date anywhere)… |
| `batman-1966-topps` | Batman | high | Card, set, year and first-set status all check out: PSA states flatly that the 55-card Black Bat series was the first Batman set Topps issued, and the ACC numbering corroborates (Black Bat is the unsuffixed base R710-16; Red Bat is R710-16B… |
| `dceu-1940-superman-12` | Superman | high | This is the same class of error the project already found once. The entry's own logic is 'the nearest real card belongs to the hero who started it' -- Superman -- but it points at Gum, Inc. #12 'Superman's Arch Enemy', which is the LEX LUTH… |
| `thomas-1992-banpresto` | Thomas the Tank Engine | medium | The 1992 Banpresto prism set cannot be verified, and the evidence now runs against it rather than merely being thin. The Thomas wiki has a dedicated Banpresto page enumerating that company's Thomas output -- video games, coin-operated rides… |
| `magic-1993-alpha` | Black Lotus | high | Set facts are right -- Limited Edition Alpha is 295 cards released 5 August 1993, and the rounded-corner tell is confirmed and quantifiable (about a 2mm corner radius against the later 1mm standard). Four claims are wrong or unsupported. (1… |
| `indiana-jones-1981-topps` | Indiana Jones | medium | One fun fact is flatly wrong and the central claim is unresolved. The error: 'Every card frames its photograph inside a drawn temple lintel' is not what the set looks like. Cardboard Connection describes bright green outer borders, a snake … |
| `kirby-1993-carddass` | Kirby | medium | Two separate problems. First, the fun fact is provably wrong and is contradicted by the entry's OWN cited source: Wikipedia says 'Sakurai always intended the character to be pink, though this was unknown to the development team at first; in… |
| `motu-1984-heman` | He-Man | high | This is the same shape as the Superman #36 failure. He-Man appears on BASE CARD #1 'Welcome to Eternia!', which is far lower than peel-off sticker #19. The card scan from the He-Man Wiki shows #1 to be a full-figure He-Man portrait, sword a… |
| `dungeon-fighter-online-no-card` | Dungeon Fighter Online (game) | high | The claim that 'no physical trading card line has ever been produced' is false. A licensed physical TCG for this exact IP launched in South Korea: 던전앤파이터 TCG, developed by Neople (the game's own developer) and published by Sigongsa, release… |
| `candy-crush-no-card` | Candy Crush Saga (game) | medium | Two problems. (1) HIGH CONFIDENCE: 'no characters, no narrative' is flatly false. Wikipedia names Tiffi (Toffette), Mr. Toffee, Mr. Yeti, Odus the Owl, the Bubblegum Troll and the Easter Bunny, with the Jelly Queen and Cupcake Carl in spin-… |
| `gta-no-card` | Grand Theft Auto (game series) | high | Four problems. (1) An officially licensed GTA trading card set now exists: Panini America and Rockstar Games announced the 'GTAVI: Sports Trading Card Collection' on 24 November 2026 (PR Newswire), described in the release as the first trad… |
| `totoro-no-card` | Totoro | medium | The plush sales sentence attaches the right number to the wrong company and the wrong product. Japanese Wikipedia (となりのトトロ) states the FIRST Totoro merchandise was a promotional plush sold during the theatrical run, totalling 666,920 units;… |
| `uncharted-2012-gamestop-italia` | Nathan Drake | medium | (1) CATEGORY ERROR, high confidence: these are playing cards ('un mazzo di carte', a deck), and this same database's Totoro entry explicitly rules that playing cards and telephone cards 'are card-shaped and collected but are not trading car… |
| `toy-story-1995-skybox` | Woody | medium | (1) No card number is given at all - a real gap for a 90-card set, and it cannot be closed with confidence. Jeff Allender's structure is 1-38 story, 39-40 Class Clowns, 41-43 Green Army Men, 44-46 Woody, 47-49 Buzz Lightyear, 50-52 Mutants,… |
| `garfield-1992-skybox` | Garfield | medium | (1) The fun fact 'Card #1 is a straight portrait, unusual for a set otherwise built around gags and trivia' is false. Cards 1-21 are ALL character portraits - the Comics Cast subset (1 Garfield, 2 Odie, 3 Jon, 4 Lyman, 5 Pooky, 6 Nermal, 7 … |
| `ghostbusters-1988-slimer` | Slimer | medium | The card identification is right (sticker #10 is Slimer; the set is 90 base cards plus 11 stickers covering 15 properties, and the Canadian O-Pee-Chee version is 101 cards with blue backs instead of yellow, all confirmed). Two statements in… |

## Unverifiable (42)

Not passes. Honest gaps, mostly because tcdb.com, psacard.com and the Fandom
wikis all refused automated fetching during the pass, and the shared search
budget ran out partway.

- `ron-weasley-2001-wotc` — The card data is exactly right and independently confirmed from the card scan: #17/116, Premium Holo, CHARACTER - Wizard / Gryffindor - Unique, Illus. D. Alexander Gregory, flavour
- `severus-snape-2001-wotc` — All card-level claims check out against the card scan: #16/116, printed as 'Professor Severus Snape', CHARACTER - Wizard / Slytherin - Unique / Healing, Illus. Scott M. Fischer, fl
- `krillin-1988-carddass` — Every card-level claim is confirmed against the actual card scan: Carddass Part 1 (Hondan), November 1988, 42 cards at 20 yen, 36 normal + 6 prism; #21 Krillin with attack 60 / def
- `bulma-1988-carddass` — Card data confirmed against the scan, including the detail I was most sceptical of: #28 Bulma carries no attack/defence and does print a tiebreaker rule in vertical type at bottom-
- `roshi-1988-carddass` — Card data confirmed against the scan: #5 Master Roshi (Kame-Sen'nin) is one of the six prisms - the prisms are #1-6 (#1 and #2 Goku, #3 and #4 Piccolo Daimao, #5 Roshi, #6 Shenron)
- `minecraft-2015-steve` — NO SOURCE FOUND FOR THE NAMED PRODUCT - not the year, the publisher, the July 2015 date, the three-per-pack format, the die-cut-sticker front, the poster-puzzle back, or the unnumb
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
- `tyson-2001-beyblade-ccg` — No public checklist for the Japanese Takara Beyblade card game exists anywhere (Wikipedia, Beyblade Wiki and TCDB all cover only the 2003 English Decipher 'Beyblade Collision' set)
- `kai-2001-beyblade-ccg` — No source anywhere documents a card named フレイムシュート, at #120 or any other number — existence of the card itself could not be confirmed. No checklist for the set exists, so neither t
- `max-2001-beyblade-ccg` — No source documents a card named シールドシュート, at #122 or otherwise; existence unconfirmed. Note there is a CCG-exclusive Beyblade called シールドドランザー (Shield Dranzer), so the title may b
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
- `dragon-ball-1988-carddass` — The set-level facts CHECK OUT: Kanzenshuu, drawing on Daizenshuu 8's merchandise data, gives Dragon Ball Carddass Set 1 as November 1988, 36 regular plus 6 prism cards, numbered No
- `street-fighter-1992-carddass` — THE NAMED CARD CANNOT BE VERIFIED AT ALL, and as written it is incoherent: '#27 Chun-Li vs Chun-Li prism' does not say whether the card is number 27, a prism, or both. No Street Fi
- `gijoe-1986-snakeeyes` — THE CARD AND SET DETAILS CHECK OUT, BUT THE CENTRAL FIRST-CARD CLAIM COULD NOT BE TESTED. Cardboard Connection's numbered checklist shows #8 Snake-Eyes as the LOWEST-numbered Snake
- `carebears-1985-tenderheart` — The set exists and its size is confirmed -- klebebildchen.net gives the 1985 Panini Care Bears collection as 216 stickers numbered 1-216, and coleka's 217 items is consistent (216 
- `sly-cooper-2012-gamestop-italia` — The entry's core claim is unsupported: no source found names WHICH five characters are on the deck. The one primary source - Sony's own Italian blog post - says only 'cinque protag
- `yoshi-1991-carddass` — The existence of this set could not be verified at all. The Super Mario Wiki has no Carddass page (/Carddass, /Carddass_Super_Mario_World and /Super_Mario_World_(trading_cards) all
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

---

# What the photographs themselves settled

Every image's top 24% was cropped and tiled into contact sheets so each slab
label could be read. **80 of 244 entries now carry the certification of the copy
photographed, up from 15.** That sweep answered questions the research left
open — and overturned six of its findings.

## Research findings the slabs refute

- **The Thing and the Human Torch are 1975, not 1976.** Both slabs read "1975
  Comic Book Heroes".
- **Mickey #75 is a Type II.** PSA's own label says so; the claim that Type II
  covers only cards 1–24 does not hold.
- **Elsa's glitter card prints "100" and Olaf's prints "90".** Both power-score
  fun facts were reported as unsourced. The cards print the numbers.
- **Wallace is 1995, card #106**, settling a year the research left as "1989 vs
  1995 unresolved".
- **Doctor Who #42 exists.** PSA has certified one from the Cadet Sweets set the
  research called "untestable and very unlikely in a 50-card story".
- **Donatello is sticker #3**, as its slab shows. That finding argued about #21.

## New problems only the photographs could find

- **Pluto's photograph was Mickey's rookie.** `disney-1935-pluto` is illustrated
  with a slab reading "1935 MICKEY MOUSE #1 — LET'S MAKE HOOP-EE!", and the card
  shows Mickey with the hoop and Pluto beneath him. Mickey was filed at #75.
  Both entries now point at #1 and share the photograph. **Fixed.**
- **Thrall's card number** came off his CGC slab: Heroes of Azeroth 267/361. The
  entry had named no card. **Fixed.**
- **SpongeBob's card is "Aquatic Amigos #001"** — closing a pricing gap eBay
  would not.
- **Street Fighter's card shows ⑰**; the entry claims #27.
- **Digimon's slab reads "2000 … 1ST EDITION"** — the English Digi-Battle
  release, now named as such. **Fixed.**

## Slabs that are not PSA (14)

| grader | card |
|---|---|
| SGC 4 | avengers-1966-donruss |
| SGC 4.5 | superman-1940-gum-inc |
| SGC 7 | black-widow-1975-topps |
| CGC 7 | daredevil-1966-donruss |
| CGC 8.5 | warcraft-2006-upper-deck |
| CGC 10 | donkey-kong-1982-topps |
| BGS 9.5 | flesh-and-blood-2019 |
| BGS 9.5 | lotr-tcg-2001-decipher |
| MGC 9 | darth-vader-1977-topps |
| MGC 9 | bart-simpson-1990-topps |
| MVP 9 | doctor-doom-1975-topps |
| GMA 7 | red-skull-1976-topps |
| GMA 8 | sub-mariner-1975-topps (cert digits cropped) |
| PCG 10 | sorcery-contested-realm-2023 (holder unclear) |

## A check worth keeping

Every slab's printed card number was compared against the number its entry
claims. **Zero mismatches.** The photographs are of the cards the entries name,
so the entry and its picture were wrong together — and every card-number
correction strands its image.

## Security note

During the research pass, an agent reported that a Wikiwand mirror of a
Wikipedia page contained text addressed to an AI assistant. It was ignored and
not used as a source. Worth knowing that scraped mirrors of reference sites can
carry injected instructions.

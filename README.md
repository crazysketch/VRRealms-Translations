# VR Realms translations

Every word you read in [VR Realms](https://store.steampowered.com/app/2964550/) (menus, buttons, Nixie's lines, pop-ups) in 13 languages. If something sounds stiff, wrong or not like a real person would say it, you can fix it here, and it goes into the game with the next update.

You do not need to be a programmer. A GitHub account is enough.

## The languages

| File | Language |
|---|---|
| `languages/es.json` | Español |
| `languages/ar.json` | العربية |
| `languages/ja.json` | 日本語 |
| `languages/ko.json` | 한국어 |
| `languages/zh-Hans.json` | 简体中文 |
| `languages/nl.json` | Nederlands |
| `languages/de.json` | Deutsch |
| `languages/ru.json` | Русский |
| `languages/it.json` | Italiano |
| `languages/pl.json` | Polski |
| `languages/fr.json` | Français |
| `languages/pt-BR.json` | Português (Brasil) |
| `languages/uk.json` | Українська |

`languages/en.json` is the English the game is written in. It is there to read, not to translate.

## How to fix a line

1. Open your language's file above and find the line (Ctrl+F and type a few words of it).
2. Press the pencil button (Edit this file).
3. Change only the `"text"` part. Leave `"en"` and the line's name as they are.
4. Press **Commit changes**, then **Propose changes**, then **Create pull request**. Say in a sentence what was wrong.

A check runs by itself on your change and tells you if something would break the game. We read every change and take it in with the next update.

Each line looks like this:

```json
"first.hub": {
  "en": "GO TO THE HUB",
  "text": "IR AL HUB"
},
```

## The few rules

* **Keep the `{0}`, `{1}`, ...** They are filled in by the game (a player's name, a number). You can move them around in the sentence, but every one in the English must stay.
* **Keep `Nixie:` at the start** of her lines. Nixie is the robot who guides you, and the game shows who is talking by it. Her voice is dry, a little smug, and never mean.
* **Buttons are short.** Words in CAPITALS are usually buttons or headings: keep them about as long as the English, or they may not fit.
* **Say it the way a player would.** The game talks to you as a friend (Spanish `tú`, French `tu`, German `du`, and so on), not like a manual.
* Keep the game's own words the same everywhere: if your language calls the main meeting place "hub", every line should.

## Not sure? Just tell us

If you do not want to edit anything, open an [issue](../../issues/new/choose) with **"This line sounds wrong"**: say which line, what is wrong, and how a native speaker would say it.

## A new language

Open an issue and tell us which one. We add the file with the English in it, and you can start.

By sending a change you agree that VR Realms may use it in the game.

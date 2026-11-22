# Navya Juneja · Program Manager portfolio for Zomato

A job-application portfolio for Program Manager roles at Zomato, built in the interface language of a food delivery app: cases are restaurants, domains are cuisines, experience is order tracking, and the cart is an interview request.

The positioning: I run programs that cross many teams, whatever the industry. Payments at PhonePe is one domain of eight.

## Routes

| Route | What it is |
|---|---|
| `#/` | Home: hero, "top offers" (program evidence), *What's on your mind?* (problem shapes), cuisines (domains), collections, all 11 cases, the go-live clock, the playbook strip, 90-day hypotheses |
| `#/explore` | Every case, filterable by domain (`d`), program skill (`s`), problem (`p`), provenance (`r`), quick filter (`f`), search (`q`) and sort |
| `#/r/<id>` | A case as a restaurant page: rating chip (provenance), overview, how it ran, why it matters at Zomato, details, photos, similar programs |
| `#/collections`, `#/c/<id>` | Curated lists by kind of program (go-lives, gated launches, many teams, quiet leaks, live builds) |
| `#/playbook` | How I run a program: four habits and Intake → Plan → Phase → Monitor → Close, each step linked to the case that shows it |
| `#/90-days` | First 90 days at Zomato: hypotheses built from Zomato's public information, each with the metric that would prove it wrong |
| `#/golive` | *Where did the time go?* An interactive restaurant go-live timeline with one clock per party (Modelled, illustrative) |
| `#/orders` | Experience and education as order history with tracking steps; "Reorder" adds those programs to the order |
| `#/cart` | Your order: pick programs, interview format and role; "Place order" opens a pre-filled interview-request email |
| `#/profile` | Contact, certifications, what the ratings mean, FAQ |

## Provenance labels

Every figure is labelled. On cards, the rating chip is the provenance of the headline number, not a score.

- **Result**: achieved, as stated on my CV
- **Built**: a working product you can open
- **Modelled**: my own assumption, stated
- **Target**: a success criterion, not an outcome
- **Sourced**: external or survey data, cited with a link

Zomato facts come only from zomato.com, Zomato's partner page and Eternal's public company overview (April 2026). PhonePe figures are as stated on my CV; no internal data is reproduced.

## Running it

Static site, no build step. Open `index.html`, or serve the folder with `python3 -m http.server`. Content lives in `assets/data.js`; the app is `assets/app.js` and `assets/app.css`. The cart and interview preferences are stored in this browser only.

## Disclaimer

Independent job-application portfolio. Not affiliated with or endorsed by Zomato, Eternal, PhonePe or any other company named here. The logo mark is an original drawing; no Zomato logo, wordmark or artwork is used.

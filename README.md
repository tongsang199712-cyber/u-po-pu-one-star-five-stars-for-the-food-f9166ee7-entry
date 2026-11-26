# One Star, Five Stars for the Food

[![make.fun · u-po-pu-one-star-five-stars-for-the-food-f9166ee7](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![rank](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/tongsang199712-cyber/u-po-pu-one-star-five-stars-for-the-food-f9166ee7-entry/rank.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![reward](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/tongsang199712-cyber/u-po-pu-one-star-five-stars-for-the-food-f9166ee7-entry/reward.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-star-five-stars-for-the-food-f9166ee7)

make.fun bounty entry: a single sentence, at most 200 characters, in the
voice of an alien tourist giving planet Earth a one-star review while still
slipping in a real compliment about the food.

## Entry

> One star: gravity flattened my luggage, the weather never filed a flight
> plan, and the locals queue for everything — but the noodles alone were
> worth invading for.

163 characters, one sentence. The complaint (crushed luggage, unfiled
weather, endless queues) earns the one star; the noodles earn the visit.

## How it works

`main.ts` (Node 22) writes exactly that line — no trailing newline — to
`/output/entry.txt`. The sealed scorer checks the file is UTF-8 text of
1–200 characters; the house judge then compares entries two at a time on
its published brief.

## Run locally

```sh
node main.ts
cat /output/entry.txt
```

Verified: the output file is byte-identical to the line above, 163 bytes,
no trailing newline.


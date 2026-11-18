# Sample project: an existing CircleCI customer (before Smarter Testing)

A tiny pretend shop checkout with 20 simple tests in 6 test files.
It already works with CircleCI the plain way. It does NOT have Smarter Testing yet.
Your job is to add Smarter Testing to it, the way a real customer would.

## What's in here

| Folder / file | What it is |
| --- | --- |
| `src/` | The "app" code. |
| `tests/` | The tests (one file per source file). |
| `.circleci/config.yml` | The customer's existing CircleCI setup. It runs the tests with a plain command. |

There is no `.circleci/test-suites.yml`. That's the file you'll add.

## Part 1: Put it on GitHub and connect it to CircleCI

1. On GitHub (signed in as xiaoxuezh1129), click **New repository**. Name it `circleci-existing-customer-sample`. Leave "Add a README" unchecked.
2. Click **uploading an existing file**. Open this unzipped folder on your Mac, press Cmd + Shift + . to show hidden items, press Cmd + A to select everything INSIDE the folder, and drag it all in. The file list should show paths starting with `src/`, `tests/`, `.circleci/`, with no extra folder name in front. Click **Commit changes**.
3. If `.circleci` didn't upload, add it with **Add file > Create new file**. Type `.circleci/config.yml` as the name and paste in the contents of the `config.yml` from this folder.
4. In app.circleci.com, set up the project from this repo, using the config already in the repo.
5. Open the first pipeline > the **test** job > **Tests** tab. Write down what you see: 20 tests, how long the job took. This is your "before" picture.

## Part 2: Add Smarter Testing (do this like a real customer)

1. **Install the tools** on your computer (Terminal): Node.js (nodejs.org, LTS version), then the CircleCI CLI (https://cli.circleci.com/), then:
   `circleci extension install testsuite`
2. **Download this project** from GitHub (green **Code** button > **Download ZIP**), unzip it, and in Terminal go into the folder: type `cd ` and drag the folder into the Terminal window, then press Enter. Then run: `npm install`
3. **Create the new file `.circleci/test-suites.yml`** with this content:

```
---
name: ci tests
discover: vitest list --filesOnly
run: vitest run --reporter=junit --outputFile="<< outputs.junit >>" --silent --bail 0 << test.atoms >>
outputs:
  junit: test-reports/junit.xml
```

   (This is the part a real customer has to figure out. Try it yourself first: run the check in the next step and see how far the CLI gets you before you copy anything.)
4. **Run the setup check:** `circleci testsuite doctor "ci tests"`. Follow what it says until all checks pass.
5. **Edit `.circleci/config.yml`:** replace the whole "Run tests" step (the three lines starting with `- run:` and `name: Run tests`, plus its `command:` line) with this one line:
   `- run: circleci testsuite run "ci tests"`
   Optional: to see tests split across machines, add a line `parallelism: 2` directly under the `test:` job, lined up with `docker:`.
6. **Commit both files to GitHub** (on a new branch if you like), let the pipeline run, then open the **Tests** tab.
7. **Compare with your "before" picture:** same number of tests? Similar job time? (The docs say to check exactly this.)

## Part 3: Things worth noticing for your research

- Which steps felt confusing or took longest?
- What did the `doctor` command say, and could you act on it without coding knowledge?
- Anything that looked different between the Tests tab before and after?
- Where did you get stuck, and what did you expect to see?

Note: the command names changed in 2026. Older guides say `circleci run testsuite`; the current form is `circleci testsuite run`.

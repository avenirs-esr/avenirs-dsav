# Avenir(s) DSAV

## What is DSAV?

DSAV is the deisgn system for AVENIR(s) projects and consists of an **adaptation** of [**VueDSFR**](https://vue-ds.fr/)
into a [**Vue 3**](https://v3.vuejs.org/) project in the form of a **component library**.

The code is [open and available on GitHub](https://github.com/avenirs-esr/avenirs-dsav/)

## Why DSAV?

The AVENIR(s) program has chosen its technical stack for the front end, based on
Vue 3. VueDSFR offers a component library based on 
[**French Design System**](https://www.systeme-de-design.gouv.fr/).

The AVENIR(s) program needs its own identity, hence this adaptation of VueDSFR.

## Complete documentation

You can find the complete documentation on our [github page](https://avenirs-esr.github.io/avenirs-dsav/).

## Installation

In your project, run `npm install @ævenirs-esr/avenirs-dsav`.

In order to make the style from `DSAV` work in your project, make sure to import the main `DSAV` style in your `main.ts` with the following : `import '@avenirs-esr/avenirs-dsav/dist/avenirs-dsav.css'`.

## Contributing

### Deploying a new npm version

When your development is successfully merged in `develop` or `main`, you can run the job `Release new version to npm` and select the type of version bump : `patch`, `minor` or `release`.

### Commit conventions

This repository uses [Commitlint](https://commitlint.js.org/) to enforce consistent and conventional commit messages.

This setup extends the conventional commit configuration (`@commitlint/config-conventional`) and adds custom rules:

✅ Allowed Commit Types

The following commit types are allowed:

- `feat` – A new feature
- `fix` – A bug fix
- `docs` – Documentation changes
- `refactor` – Code refactoring (no feature or bug fix)
- `test` – Adding or modifying tests
- `build` – Changes to build tools or dependencies
- `revert` – Revert a previous commit

🔠 Commit Message Rules

| Rule           | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| `type-enum`    | Only allows the types listed above                                          |
| `type-case`    | Commit type must be **lowercase**                                           |
| `type-empty`   | Commit type **must not** be empty                                           |
| `subject-case` | No restriction on subject casing (rule is disabled for flexibility)         |

 ✅ Example Commit Messages

```
feat: add user login functionality
fix: handle null pointer in dashboard
docs: update installation guide
```

## Projects using DSAV

- [AVENIR(s) Cofolio](https://github.com/avenirs-esr/avenirs-cofolio-client) : An ePortfolio for Higher Education and Research
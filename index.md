---
---

# 4dcitygml

4dcitygml keeps a city's CityGML in a Git repository and changes it one building
at a time. Each change is a pull request: checked by CI, reviewed, and merged
into the history, so the model records when, what and why a building changed.
The source-compatible edition stays canonical; other editions are generated as
derived releases.

It is an independent, experimental open-source project. All of its public
repositories are listed on [GitHub](https://github.com/4dcitygml).

## Pilot cities (planned)

4dcitygml plans to call for three cities for an operational pilot. The pilot
will be open to official initiatives of local governments and other public
bodies and free of charge for them; 4dcitygml will provide operational support
during the pilot. How to apply will be announced on this page.

## Repositories

| Repository | Role | Start with |
|---|---|---|
| [tools](https://github.com/4dcitygml/tools) | Hub and editors, CI checks, converters, schemas, releases (`hub-v`, `tools-v`) | [README](https://github.com/4dcitygml/tools#readme) |
| [city-template](https://github.com/4dcitygml/city-template) | Starting structure for an independent city repository: workflows, documents, PR templates | [README](https://github.com/4dcitygml/city-template#readme) |
| City repositories | One per city: its CityGML, history and `4dcitygml.json`; pins a `tools-v` release | [Cities](cities.md) |
| [.github](https://github.com/4dcitygml/.github) | Organization policies and issue forms | [CONTRIBUTING](https://github.com/4dcitygml/.github/blob/main/CONTRIBUTING.md) |

A city repository is created from `city-template` and holds data, documents
and settings only. Its workflows pin a reviewed `tools-v` commit, so shared
checks change only when the city updates the pin.

## Reference

- [Exchange contract](https://github.com/4dcitygml/tools/blob/main/docs/exchange-contract.md):
  what a city repository, its pull requests and the CI exchange
- [Release and distribution status](https://github.com/4dcitygml/tools/blob/main/docs/shared-tooling-release.md)
- [CityGML 2.0 to 3.0 + i-UR 4.0 converter](https://github.com/4dcitygml/tools/blob/main/docs/citygml2-to3-iur4.md)
- [3DCityDB integration](https://github.com/4dcitygml/tools/blob/main/docs/3dcitydb-github-integration.md):
  optional, experimental connector between a local 3DCityDB v5 and a city repository
- [Principles](https://github.com/4dcitygml/tools/blob/main/docs/principles.md)

## Contact

Questions and reports go to the repository that owns the code or data; see
[SUPPORT](https://github.com/4dcitygml/.github/blob/main/SUPPORT.md).

---

Not an official publication of OGC, Project PLATEAU, i-UR, or any source-data provider.

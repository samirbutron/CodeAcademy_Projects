**Context**: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study.

## Functions
- returnRandBase() -> Returns a character from 1 of 4 randomly selected *base*
- mockUpStrand () -> Returns a 15 character array where each caracter is a *base*
- mutateStrand () -> Returns a mutated *strand*.
    - Mutation consists on changing a *base* from the dna strand.
- compareDNA (obj) -> Accepts another pAequor object and compres the dna strands of both, returning the porcentage of coincidence.
- willLikelySurvive() -> Returns `true` or `false` depending if the dna strand is conformed of at least 60% of 'C' and 'G' *bases*.
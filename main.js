// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(specimenNum, specimenDNA) {
  const pAequor = {
    num: specimenNum,
    dna: specimenDNA,
    mutate: function() {
      // This gets the random
      let baseNumber = Math.floor(Math.random() * 15);

      // this gets an initial random base letter
      let randomLetter = returnRandBase();
      let dnaArray = [...this.dna]; // create a copy of the array do not change the origial
      // condition where the randomBase and this.dna[baseNumber]) are equal.
      if (randomLetter === dnaArray[baseNumber]) {
        // loops until different
        while (randomLetter === dnaArray[baseNumber]) {
          randomLetter = returnRandBase();
        }
        dnaArray.splice(baseNumber, 1, randomLetter);
      }
      return dnaArray;
    },
    compareDNA: function(other_pAequor) {
      const firstSample = other_pAequor.dna.reduce((total, current) => {
        if (total.indexOf(current) === -1) {
          total.push(current);
        }
        return total;
      }, []);

      const secondSample = this.dna.reduce((total, current) => {
        if (total.indexOf(current) === -1) {
          total.push(current);
        }
        return total;
      }, []);

      let simliarCount = 0;
      for (let alieal in firstSample) {
        if (firstSample[alieal] === secondSample[alieal]) {
          simliarCount++;
        }
      }
      console.log(
        `Specimen #1 and Specimen #2 have ${simliarCount /
          4 *
          100}% DNA in common.`
      );
    }
  };

  return pAequor;
}

for (let i = 0; i < 10; i++) {
  const test = pAequorFactory(1234, mockUpStrand());
  let testpA = test.mutate();

  const testObj = {
    num: 12343,
    dna: testpA
  };

  test.compareDNA(testObj);
}

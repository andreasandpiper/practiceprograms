function bubbleSort(array){
            var numOfSwitches = 0;
            for(var wordIndex = 0 ; wordIndex <array.length -1 ; wordIndex++){
                var resultOfLetterCheck = isFirstWordGreater(array[wordIndex], array[wordIndex + 1]);
                if(resultOfLetterCheck){
                    var firstWord = array[wordIndex];
                    array[wordIndex] = array[wordIndex + 1];
                    array[wordIndex + 1] = firstWord;
                    numOfSwitches += 1;
                }
            }
            if (numOfSwitches > 0){
                return bubbleSort(array);
            } else {
                return array;
            }
        }

        function isFirstWordGreater(word1, word2){
            for(var letterIndex=0 ; letterIndex < word1.length ; letterIndex++){
                var word1Letter = word1[letterIndex].toLowerCase().charCodeAt(0);
                var word2Letter = word2[letterIndex].toLowerCase().charCodeAt(0);
                if(word1Letter > word2Letter){
                    return true;
                }
                if(word1Letter < word2Letter){
                    return false;
                }
            }
        }

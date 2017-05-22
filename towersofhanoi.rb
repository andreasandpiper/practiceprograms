puts "Welcome to the Tower of Hanoi Game. The object of the game is to move the stack of discs to a different tower in as few moves as possible. The discs are arranged so that the largest disc is on the bottom, and the smallest on the top, 1 being the smallest. However, there is a catch! You can only stack a smaller disc on a larger one, but not vice versa! Good luck!"
puts "How many discs would you like to play with? If you want to play an easy warm up, I recommend 3 or 4!"
discs= gets.chomp.to_i


towers = [
[].reverse,
[],
[]
]
(1..discs).each {|n|towers[0].push(n) }
goal= towers[0].reverse
moves = 2**discs-1
puts "Alright! You have #{moves} to solve the puzzle!"

towers[0]= towers[0].reverse
until moves == 0

  puts "Your tower looks like this:"
  puts "tower 1: #{towers[0]}"
  puts "tower 2: #{towers[1]}"
  puts "tower 3: #{towers[2]}"

  puts "Where would you like to pick up a disc?"
  movefrom = gets.chomp.to_i
  puts"Where would you like to place the disc?"
  moveto= gets.chomp.to_i

  if [1, 2, 3].include?(movefrom) && [1,2,3].include?(moveto)
    movedfromtower= towers[movefrom - 1][0..-1]
    movedtotower= towers[moveto - 1][0..-1]
   if movedfromtower.empty? == false
     if movedtotower.length == 0 || movedfromtower.last < movedtotower.last
       towers[moveto - 1] << towers[movefrom - 1].pop
       moves -= 1
     else
       puts "Ah-ha! You can only put smaller discs on top! Try again"
      end
    else
      puts "There are no disks in that tower. Pick again!"
    end
  else
    puts "Try again! Remember, you can only pick from 1, 2 or 3!"
  end
   puts "You have used #{moves} moves"
  if  moves > 1  && towers[1] == goal || towers[2] == goal
    puts "tower1: #{towers[0]}"
    puts "tower2: #{towers[1]}"
    puts "tower3: #{towers[2]}"
    puts "Congratulations you win!"
  elsif moves > 0
    puts "Keep trying!"
  else
    puts "You were defeated by the Towers of Hanoi. You lost, try playing again!"
  end
end

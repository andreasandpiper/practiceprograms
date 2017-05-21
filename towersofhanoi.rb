puts "Welcome to the Tower of Hanoi Game. The object of the game is to move the stack of discs to a different tower in 7 moves. The discs are arranged so that the largest (number 3) is on the bottom, and the smallest (number 1) on the top. For today's game, you will be playing with 3 discs. However, there is a catch! You can only stack a smaller disc on a larger one, but not vice versa! Good luck!"

towers = [
[3,2,1],
[],
[]
]

goal= [3,2,1]
moves= 7

until moves == 0

  puts "Your tower looks like this:"
  puts "tower 1: #{towers[0]}"
  puts "tower 2: #{towers[1]}"
  puts "tower 3: #{towers[2]}"

  puts "Where would you like to pick up a disc?"
  pick = gets.chomp.to_i
  puts"Where would you like to place the disc?"
  destination= gets.chomp.to_i

  if [1, 2, 3].include?(pick) && [1,2,3].include?(destination)
    pickedtower= towers[pick - 1][0..-1]
    destinationtower= towers[destination - 1][0..-1]
   if pickedtower.empty? == false
     if destinationtower.length == 0 || pickedtower.last < destinationtower.last
       towers[destination - 1] << towers[pick - 1].pop
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
   puts "You have #{moves} moves left!"
  if  moves < 6  && towers[0] == goal || towers[1] == goal
    puts "tower1: #{towers[0]}"
    puts "tower2: #{towers[1]}"
    puts "tower3: #{towers[2]}"
    puts "Congratulations you win!"
  else
    puts "You were defeated by the Towers of Hanoi. You lost, try playing again!"
  end
end

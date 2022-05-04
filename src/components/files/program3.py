class TicTacToe:

  def __init__(self):
    self.board = []

  def create_board(self):
    for i in range(3):
      row = []
      for j in range(3):
        row.append('-')
      self.board.append(row)

  def get_random_first_player(self):
    #return random.randint(0, 1)
    no = int(input("Press 1 for Player 'X' \nPress 0 for player 'O' :"))
    return no

  def fix_spot(self, row, col, player):
    self.board[row][col] = player

  def is_player_win(self, player):
    win = None

    n = len(self.board)

    #checking rows
    for i in range(n):
      win = True
      for j in range(n):
        if self.board[i][j] != player:
          win = False
          break
      if win:
        return win

    #checking columns
    for i in range(n):
      win = True
      for j in range(n):
        if self.board[j][i] != player:
          win = False
          break
      if win:
        return win

    #checking diagonals
    win = True
    for i in range(n):
      if self.board[i][i] != player:
        win = False
        break
    if win:
      return win

    win = True
    for i in range(n):
      if self.board[i][n - 1 - i] != player:
        win = False
        break
    if win:
      return win
    return False

    for row in self.board:
      for item in row:
        if item == '-':
          return False
    return True

  def is_board_filled(self):
    for row in self.board:
      for item in row:
        if item == '-':
          return False
    return True

  def swap_player_turn(self, player):
    return 'X' if player == 'O' else 'O'

  #displaying board
  def show_board(self):
    for row in self.board:
      for item in row:
        print(item, end=" ")
      print()

  def start(self):
    self.create_board()

    player = 'X' if self.get_random_first_player() == 1 else 'O'
    while True:
      print(f"Player {player} turn")

      self.show_board()

      #taking user input as rto and column wise
      row, col = list(
        map(int, input("Enter row and column numbers to fix spot: ").split()))
      print()

      #fixing the user input
      self.fix_spot(row - 1, col - 1, player)   #row = 1 will place player's value on 0 also if row = 3 will place value to row = 2

      # checking whether current player is won or not
      if self.is_player_win(player):
        print(f"Player {player} wins the game!")
        break

      # checking whether the game is draw or not
      if self.is_board_filled():
        print("Match Draw!")
        break

      # swapping the turn
      player = self.swap_player_turn(player)

    # showing the final view of board
    print()
    self.show_board()

# starting the game
tic_tac_toe = TicTacToe()
tic_tac_toe.start() 


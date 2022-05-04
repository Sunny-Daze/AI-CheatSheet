# Import libraries
import aima3.utils
import aima3.logic
# The main entry point for this module
def forward_chaining():
  # Create an array to hold clauses
  clauses = []
  # Add first-order logic clauses (rules and fact)
  clauses.append(aima3.utils.expr("(American(x) & Weapon(y) & Sells(x, y, z) & Hostile(z)) ==> Criminal(x)"))
  clauses.append(aima3.utils.expr("Enemy(Nono, America)"))
  clauses.append(aima3.utils.expr("Owns(Nono, M1)"))
  clauses.append(aima3.utils.expr("Missile(M1)"))
  clauses.append(aima3.utils.expr("(Missile(x) & Owns(Nono, x)) ==> Sells(Colonel, x, Nono)"))
  clauses.append(aima3.utils.expr("American(Colonel)"))
  clauses.append(aima3.utils.expr("Missile(x) ==> Weapon(x)"))
  # Create a first-order logic knowledge base (KB) with clauses
  KB = aima3.logic.FolKB(clauses)
  # Add rules and facts with tell
  KB.tell(aima3.utils.expr("Enemy(x, America) ==> Hostile(x)"))
  # Get information from the knowledge base with ask
  hostile = aima3.logic.fol_fc_ask(KB, aima3.utils.expr('Hostile(x)'))
  criminal = aima3.logic.fol_fc_ask(KB, aima3.utils.expr('Criminal(x)'))
  # Print answers
  print('enemy?')
  print(list(hostile))
  print('\nCriminal?')
  print(list(criminal))
  print()
# Tell python to run main method
if __name__ == "__main__": forward_chaining()


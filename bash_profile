eval "$(/opt/homebrew/bin/brew shellenv)"

if [ -f $(brew --prefix)/etc/bash_completion ]; then
  . $(brew --prefix)/etc/bash_completion
fi

source ~/.bashrc

alias ls='ls -G -p'
alias vi='nvim'
set -o vi

export BAT_THEME="gruvbox-dark"

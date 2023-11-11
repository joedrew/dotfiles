#!/usr/bin/env bash

set -e
set -x

CURDIR=$(cd $(dirname "$0") && pwd)

function backup_dir {
    file="$1"
    if [ -d "$file" -a ! -L "$file" ]; then
        mv "$file" "${file}.bak"
    fi
}

function backup_file {
    file="$1"
    if [ -f "$file" -a ! -L "$file" ]; then
        mv "$file" "${file}.bak"
    fi
}

NVIM_CONF=~/.config/nvim
backup_dir $NVIM_CONF
if [ ! -e "$NVIM_CONF" ]; then
    ln -s "${CURDIR}/nvim" "$NVIM_CONF"
fi

GITCONFIG=~/.gitconfig
backup_file $GITCONFIG
if [ ! -e "$GITCONFIG" ]; then
    ln -s "${CURDIR}/gitconfig" "$GITCONFIG"
fi

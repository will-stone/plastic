#!/bin/sh

for i in `seq 0 1 7`
do
c=$(tput setaf $i)
b=$(tput bold setaf $(($i+8)))
n=$(tput sgr0)
echo ${c}The quick brown fox ${b}jumps${n}${c} over the lazy dog ${n}
done

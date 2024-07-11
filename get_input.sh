#!bin/bash
SESSION_COOKIE="session=53616c7465645f5fbb06b87580dc53e802d80bd6c8163bd32fb76016441b950f418d766ce1e9baca58c77c0eb66d0bf49b191e4d502bc0c323234d8a08d81475"



download_input(){
    DAY=$1
    URL="https://adventofcode.com/2023/day/${DAY}/input"
            
    echo "Downloading input for Day ${DAY}..."

    curl -H "Cookie: ${SESSION_COOKIE}" ${URL} -o input${DAY}.txt

    if [ $? -eq 0 ]; then
        echo "Day ${DAY} input downloaded successfully."
    else
        echo "Failed to download input for Day ${DAY}."
    fi
}

for DAY in {1..25}; do
    download_input $DAY
done

echo "All inputs downloaded."

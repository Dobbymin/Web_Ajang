const continents = [
    {
        "_id": 1,
        "name": "Africa"
    },
    {
        "_id": 2,
        "name": "Europe"
    },
    {
        "_id": 3,
        "name": "Asia"
    },
    {
        "_id": 4,
        "name": "North America"
    },
    {
        "_id": 5,
        "name": "South America"
    },
    {
        "_id": 6,
        "name": "Australia"
    },
    {
        "_id": 7,
        "name": "Antarctica"
    }
]

const prices = [
    {
        "_id": 0,
        "name": "모두",
        "array": []
    },
    {   
        "_id": 1,
        "name": "0 ~ 199원",
        "array": [0, 199]
    },
    {
        "_id": 2,
        "name": "200 ~ 249원",
        "array": [200, 249]
    },
    {
        "_id": 3,
        "name": "250 ~ 279원",
        "array": [250, 279]
    },
    {
        "_id": 4,
        "name": "280 ~ 299원",
        "array": [280, 299]
    },
    {
        "_id": 5,
        "name": "300원 이상",
        "array": [300, 1500000]
    }
]

export {
    continents,
    prices
}

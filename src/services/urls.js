export const mediaUrl = function ({year_start = '2017', type = 'image', search}) {
    return `https://images-api.nasa.gov/search?year_start=${year_start}&media_type=${type}&q=${search}`;
};
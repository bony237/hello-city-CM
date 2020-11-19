/**
 * Structuration des blocks de discussions
 */

const profilePicture = {
    author2: './assets/images/photo-profil-2.jpg',
    author3: './assets/images/photo-profil-3.jpg',
    author4: './assets/images/photo-profil-4.jpg',
}

const discussionPost = {
    initiator: {
        author: "author2",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        likeCount: 328,
        unlikeCount: 12,
        profilePicture: profilePicture['author2'],
        elapsedTime: 4,
        personalOpinion: "like",
    },

    reactionsToInitiator: [
        {
            author: "author3",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            likeCount: 2,
            unlikeCount: 0,
            elapsedTime: 2,
            personalOpinion: "like",
        },
        {
            author: "author4",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            likeCount: 0,
            unlikeCount: 0,
            elapsedTime: 2,
            personalOpinion: "",
        },
        {
            author: "author3",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            likeCount: 1,
            unlikeCount: 0,
            elapsedTime: 1,
            personalOpinion: "",
        },
        {
            author: "author4",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            likeCount: 0,
            unlikeCount: 8,
            elapsedTime: 1,
            personalOpinion: "unlike",
        },
    ],
}


document.addEventListener('DOMContentLoaded', function () {

    const htmlSingleComment = ` {{#with comment}} ${$('#template-comment').html()} {{/with}}`

    const htmlArrayComment = ` {{#each comments}} {{#with this}} <div class="d-flex reaction"> ${$('#template-comment').html()} </div> {{/with}} {{/each}}`


    discussionPost.reactionsToInitiator.forEach((reaction) => {
        reaction['profilePicture'] = profilePicture[reaction.author]
    })

    Handlebars.registerHelper('isLike', function (value) {
        return value === 'like';
    });

    Handlebars.registerHelper('isUnLike', function (value) {
        return value === 'unlike';
    });

    const templateCommentInitiator = Handlebars.compile(htmlSingleComment)

    const templateArrayComment = Handlebars.compile(htmlArrayComment)

    $('.discussion > .initiator').html(templateCommentInitiator({ comment: discussionPost.initiator }))

    $('.discussion > .reactionsToInitiator').html(templateArrayComment({ comments: discussionPost.reactionsToInitiator }))
    
    
    


    
})
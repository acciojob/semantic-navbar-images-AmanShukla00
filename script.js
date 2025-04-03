//your code here
cy.visit(baseUrl + "/main.html");

// Wait until the heading is visible
cy.contains('h1', '3 random images', { timeout: 5000 }).should('be.visible');

// Ensure 3 images are present
cy.get('img').should('have.length', 3).each(($img, index) => {
    const expectedSources = [
        "https://picsum.photos/id/123/200/300",
        "https://picsum.photos/id/124/200/300",
        "https://picsum.photos/id/125/200/300"
    ];
    expect($img.attr('src')).to.equal(expectedSources[index]);
});

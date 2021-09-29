$(document).foundation();

document.querySelector("#createButton").addEventListener("click", function() {
    document.querySelector("#modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function() {
    document.querySelector("#modal").style.display = "none";
});

function createTracker() {
    $("#appSaveBtn").on("click", function(e) {
        var appDescription = $("#appDescription");
        var jobTitleInput = $("#jobTitleInput");
        var appUrl = $("#applicationUrl");

        localStorage.setItem("jobTitle", jobTitleInput.val());
        localStorage.setItem("appDescription", appDescription.val());
        localStorage.setItem("applicationUrl", appUrl.val());
        e.preventDefault();
        $("#appArea").append(`<li class="accordion-item" data-accordion-item>
        <a href="#" class="accordion-title">` + 
        $("#jobTitleInput").val() + `</a>
        <div class="accordion-content" data-tab-content>
            <p>` + $("#appDescription").val() + `</p>
            <a href="#" id="appLink">` + $("#applicationUrl").val() + `</a>
            <div class="column">
                <div class="grid-x grid-padding-x">
                    <div class="large-12">
                        <select>
                            <option value="">Submitted</option>
                            <option value="">Pending</option>
                            <option value="">Accepted</option>
                            <option value="">Declined</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="btn-container">
                <button class="save-btn" id="saveBtn">
                    Save
                </button>
                <button class="del-btn" id="deleteBtn">
                    Delete
                </button>
            </div>
        </div>
    </li>`)
    localStorage.setItem("newApp", add.val())
    document.querySelector("#modal").style.display = "none";
    console.log(localStorage);
    });
    
};

$("#element").on("click", function() {
    console.log(err);
})

createTracker();
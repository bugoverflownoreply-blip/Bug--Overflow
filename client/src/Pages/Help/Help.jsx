import React, { useState } from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import "./Help.css";

const BLACKBOOK_DOCX_PATH = "/documents/BugOverflow_Blackbook.docx";
const BLACKBOOK_PDF_PATH = "/documents/blackbook.pdf";
const VIDEO_PATH = "/videos/bugoverflow-user-guide.mp4";

const Help = ({ slideIn, handleSlideIn }) => {
  const [activeTab, setActiveTab] = useState("user-guide");

  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2 help-page">
        <h1 className="help-title">Help Center</h1>
        <p className="help-subtitle">
          Use this section to understand the BugOverflow app flow and access the complete
          Blackbook documentation.
        </p>

        <div className="help-tabs">
          <button
            className={`help-tab ${activeTab === "user-guide" ? "active" : ""}`}
            onClick={() => setActiveTab("user-guide")}
          >
            User Guide
          </button>
          <button
            className={`help-tab ${activeTab === "blackbook" ? "active" : ""}`}
            onClick={() => setActiveTab("blackbook")}
          >
            Blackbook
          </button>
        </div>

        {activeTab === "user-guide" && (
          <section className="help-card">
            <h2>App Flow</h2>
            <p className="help-guide-intro">
              Follow this quick walkthrough to understand how users typically move through
              BugOverflow, from signing in to contributing answers and tracking activity.
            </p>
            <div className="help-video-section">
              <h3>Guide Video</h3>
              <video className="help-video" controls preload="metadata">
                <source src={VIDEO_PATH} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
              {/* <p className="help-video-note">
                To use your own guide video, place it at
                <code> client/public/videos/bugoverflow-user-guide.mp4</code>.
              </p> */}
            </div>
            <ol className="help-flow-list">
              <li>
                <strong>Start with authentication:</strong> Open the login or sign-up page,
                create your account if you are new, and sign in to unlock asking, answering,
                voting, bookmarking, and profile features.
              </li>
              <li>
                <strong>Explore the main dashboard:</strong> After login, use the navbar and
                left sidebar to move between Home, Questions, Articles, Tags, Users,
                Bookmarks, and Help.
              </li>
              <li>
                <strong>Browse existing content first:</strong> Search for similar questions,
                open tags related to your topic, and review answers that may already solve your
                issue before posting a new one.
              </li>
              <li>
                <strong>Ask a high-quality question:</strong> Use the Ask Question page to add
                a clear title, explain the problem in detail, include helpful code or examples,
                and assign relevant tags so others can discover it easily.
              </li>
              <li>
                <strong>Engage with community answers:</strong> Open any question to read the
                discussion, submit your own answer, and vote on useful contributions to help the
                best solutions stand out.
              </li>
              <li>
                <strong>Save useful posts:</strong> Bookmark important questions or articles so
                you can return to them later without searching again.
              </li>
              <li>
                <strong>Watch notifications:</strong> Keep an eye on updates for replies,
                interactions, and other activity related to your content and account.
              </li>
              <li>
                <strong>Build your profile and reputation:</strong> As you ask thoughtful
                questions and share helpful answers, your profile reflects your activity and your
                reputation grows through community engagement.
              </li>
              <li>
                <strong>Use Help and Blackbook when needed:</strong> Return to this page anytime
                for the app guide video, workflow summary, and downloadable project
                documentation in PDF or DOCX format.
              </li>
            </ol>

          </section>
        )}

        {activeTab === "blackbook" && (
          <section className="help-card">
            <div className="blackbook-header">
              <h2>BugOverflow Blackbook</h2>
              <div className="blackbook-actions">
                <a
                  href={BLACKBOOK_PDF_PATH}
                  target="_blank"
                  rel="noreferrer"
                  className="blackbook-link"
                >
                  Open PDF
                </a>
                <a href={BLACKBOOK_PDF_PATH} download className="blackbook-link secondary">
                  Download PDF
                </a>
                <a href={BLACKBOOK_DOCX_PATH} download className="blackbook-link secondary">
                  Download DOCX
                </a>
              </div>
            </div>

            <div className="blackbook-pdf-frame">
              <iframe
                src={BLACKBOOK_PDF_PATH}
                title="BugOverflow Blackbook PDF"
                className="blackbook-pdf"
              />
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Help;

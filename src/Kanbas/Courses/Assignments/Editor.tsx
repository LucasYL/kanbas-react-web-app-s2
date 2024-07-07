export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br />
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online. 
        Submit a link to the landing page of your Web application running on Netlify. 
        The landing page should include the following: Your full name and section Links 
        to each of the lab assignments Link to the Kanbas application Links to all 
        relevant source code repositories The Kanbas application should include a link to 
        navigate back to the landing page.
      </textarea>
      <br /><br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr><br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECT</option>
              </select>
            </td>
          </tr><br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option>Percentage</option>
                <option>Points</option>
              </select>
            </td>
          </tr><br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
                <option>External Tool</option>
                </select>
              <div>
              <label>Online Entry Options</label><br />
                <label>
                  <input type="checkbox" id="wd-text-entry" />
                  Text Entry
                </label><br />
                <label>
                  <input type="checkbox" id="wd-website-url" />
                  Website URL
                </label><br />
                <label>
                  <input type="checkbox" id="wd-media-recordings" />
                  Media Recordings
                </label><br />
                <label>
                  <input type="checkbox" id="wd-student-annotation" />
                  Student Annotation
                </label><br />
                <label>
                  <input type="checkbox" id="wd-file-upload" />
                  File Upload
                </label><br />
              </div>
            </td>
          </tr><br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>
          <tr>
          <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input type="date" id="wd-due-date" value="2024-05-13" />
            </td>
          </tr><br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input type="date" id="wd-available-from" value="2024-05-06" />
              <label htmlFor="wd-available-until">Until</label>
              <input type="date" id="wd-available-until" value="2024-05-20" />
            </td>
            </tr>
          <tr>
          <td style={{ textAlign: 'right' }}>
              <button id="wd-cancel">Cancel</button>
              <button id="wd-save">Save</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

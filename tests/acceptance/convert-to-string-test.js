import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | convert to string');

test('Coverts specified files to a string', function(assert) {
  visit('/main');

  andThen(function() {
    assert.equal(find('#json').text().trim(), '{"username": "TayHobbs", "firstName": "Taylor", "email": "hobbstay@gmail.com"}');
    assert.equal(find('#templates').text().trim(), '<div class="comment-wrapper">  <div id="comment">    <p id="comment-user">John Wayne:</p>    <p id="comment-text">This looks good. Let\'s ship it.</p>  </div></div>');
  });
});
